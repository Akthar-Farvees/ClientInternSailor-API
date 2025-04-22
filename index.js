import DotEnv from "dotenv";
import express from "express";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import path from "path";
import moment from "moment-timezone";
import sql from "mssql"; // Import the mssql package

import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import CompanyChild from "./CompanySubListData/CompanyChild.js";

import jobUpdateRoute from "./events/jobUpdate.js"; 

import dbConfig, { connectDB } from "./database/dbConfig.js";

DotEnv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const JobStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/posterImage");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const JobUpload = multer({
  storage: JobStorage,
});

const upload = multer({
  storage: storage,
});

// Configure your SQL Server connection
connectDB();

// Nodemailer Transporter (for OTP emails)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Utility Function: Generate OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Registration API
app.post("/register", upload.single("companyLogo"), async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const {
      firstName,
      lastName,
      username,
      email,
      companyName,
      companyDescription,
      companyLocation,
      userMobile,
      password,
      industryId,
      departmentId,
      noEmployeeId,
    } = req.body;

    const companyLogo = req.file ? req.file.filename : null;
    const departmentIDs = typeof departmentId === "string" ? departmentId.split(",") : departmentId;
    const hashedPassword = await bcrypt.hash(password, 10);

    await sql.connect(dbConfig);

    // Check if user exists already by email or username
    const userCheckQuery = `SELECT * FROM CompanyUser WHERE Email = @Email OR Username = @Username`;
    const userCheckRequest = new sql.Request();
    userCheckRequest.input("Email", sql.VarChar, email);
    userCheckRequest.input("Username", sql.VarChar, username);
    const userExists = await userCheckRequest.query(userCheckQuery);
    if (userExists.recordset.length > 0) {
      return res.status(400).json({
        error: "EMAIL_USERNAME_ALREADY_REGISTERED",
        message: "Email or Username is already registered.",
      });
    }

    const otp = generateOTP();
    let companyId;

    // Check if company fields are all present or not
    const isCompanyFieldsEmpty = !industryId || !noEmployeeId || !departmentId || !companyLogo || !companyLocation || !companyDescription;

    if (isCompanyFieldsEmpty) {
      // Just get existing CompanyId from Company table
      const companyIdQuery = `SELECT CompanyId FROM Company WHERE CompanyName = @CompanyName`;
      const companyIdRequest = new sql.Request();
      companyIdRequest.input("CompanyName", sql.VarChar, companyName);
      const result = await companyIdRequest.query(companyIdQuery);

      if (result.recordset.length === 0) {
        return res.status(400).json({
          error: "COMPANY_NOT_FOUND",
          message: "Company not found with given name.",
        });
      }

      companyId = result.recordset[0].CompanyId;
    } else {
      // Insert into Company table
      const insertCompanyQuery = `
        INSERT INTO Company (CompanyName, CompanyDescription, CompanyLogo, CompanyLocation, IndustryID, NoOfEmployeeID)
        OUTPUT INSERTED.CompanyId
        VALUES (@CompanyName, @CompanyDescription, @CompanyLogo, @CompanyLocation, @IndustryID, @NoOfEmployeeID)
      `;
      const insertCompanyRequest = new sql.Request();
      insertCompanyRequest.input("CompanyName", sql.VarChar, companyName);
      insertCompanyRequest.input("CompanyDescription", sql.VarChar, companyDescription);
      insertCompanyRequest.input("CompanyLogo", sql.VarChar, companyLogo);
      insertCompanyRequest.input("CompanyLocation", sql.VarChar, companyLocation);
      insertCompanyRequest.input("IndustryID", sql.UniqueIdentifier, industryId);
      insertCompanyRequest.input("NoOfEmployeeID", sql.UniqueIdentifier, noEmployeeId);

      const companyResult = await insertCompanyRequest.query(insertCompanyQuery);
      companyId = companyResult.recordset[0].CompanyId;

      // Insert into CompanyDepartment table
      for (const depId of departmentIDs) {
        const insertDepartmentQuery = `INSERT INTO CompanyDepartment (CompanyId, DepartmentId) VALUES (@CompanyId, @DepartmentId)`;
        const insertDepartmentRequest = new sql.Request();
        insertDepartmentRequest.input("CompanyId", sql.UniqueIdentifier, companyId);
        insertDepartmentRequest.input("DepartmentId", sql.UniqueIdentifier, depId);
        await insertDepartmentRequest.query(insertDepartmentQuery);
      }
    }

    // Insert into CompanyUser table
    const insertUserQuery = `
      INSERT INTO CompanyUser (FirstName, LastName, Username, Email, Password, UserMobile, Status, OTP, LastOTPRequestedAt, CompanyCreatedDate, CompanyId)
      VALUES (@FirstName, @LastName, @Username, @Email, @Password, @UserMobile, 'OTP_PENDING', @OTP, GETUTCDATE(), GETDATE(), @CompanyId)
    `;
    const insertUserRequest = new sql.Request();
    insertUserRequest.input("FirstName", sql.VarChar, firstName);
    insertUserRequest.input("LastName", sql.VarChar, lastName);
    insertUserRequest.input("Username", sql.VarChar, username);
    insertUserRequest.input("Email", sql.VarChar, email);
    insertUserRequest.input("Password", sql.VarChar, hashedPassword);
    insertUserRequest.input("UserMobile", sql.VarChar, userMobile);
    insertUserRequest.input("OTP", sql.Int, otp);
    insertUserRequest.input("CompanyId", sql.UniqueIdentifier, companyId);

    await insertUserRequest.query(insertUserQuery);

    // Send OTP email
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const otpTemplatePath = path.join(__dirname, "otpTemplate.html");
    const htmlTemplate = fs.readFileSync(otpTemplatePath, "utf8");
    const htmlContent = htmlTemplate
      .replace("{{otp}}", otp)
      .replace("{{year}}", new Date().getFullYear());

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "InternSailor Account Creation Code",
      html: htmlContent,
    };
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "OTP sent to email. Please verify." });
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});


// Verify OTP API
app.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required." });
    }

    await sql.connect(dbConfig);

    const request = new sql.Request();
    request.input("email", sql.NVarChar, email);
    request.input("otp", sql.NVarChar, otp);

    const otpQuery = `SELECT * FROM CompanyUser WHERE Email = @email AND OTP = @otp AND Status = 'OTP_PENDING'`;
    const result = await request.query(otpQuery);

    if (result.recordset.length === 0) {
      return res.status(400).json({ error: "INVALID_OR_EXPIRED_OTP", message: "Invalid OTP or expired." });
    }

    // Update status to waiting for admin approval
    const updateQuery = `UPDATE CompanyUser SET Status = 'WAITING_FOR_ADMIN' WHERE Email = @email`;
    await request.query(updateQuery);

    return res
      .status(200)
      .json({ message: "OTP verified. Waiting for admin approval." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Admin Approval API
app.post("/admin-approve", async (req, res) => {
  try {
    const { email } = req.body;

    await sql.connect(dbConfig);

    const request = new sql.Request();
    request.input("email", sql.NVarChar, email);

    const userQuery = `SELECT * FROM CompanyUser WHERE Email = @email AND Status = 'WAITING_FOR_ADMIN'`;
    const userResult = await request.query(userQuery);

    if (userResult.recordset.length === 0) {
      return res
        .status(400)
        .json({ message: "No pending approvals for this email." });
    }

    // Approve user and activate their account
    const updateQuery = `UPDATE CompanyUser SET Status = 'ACTIVE' , OTP = null WHERE Email = @email`;
    await request.query(updateQuery);

    return res
      .status(200)
      .json({ message: "Admin approved. User account is now active." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Resend OTP API
app.post("/resend-otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // Connect to DB
    await sql.connect(dbConfig);

    // Fetch user's last OTP request time
    const userQuery = `
      SELECT OTP, LastOTPRequestedAt FROM CompanyUser WHERE Email = @email
    `;
    const userRequest = new sql.Request();
    userRequest.input("email", sql.VarChar, email);
    const userResult = await userRequest.query(userQuery);

    if (userResult.recordset.length === 0) {
      return res.status(404).json({
        error: "USER_NOT_FOUND",
        message: "User with this email does not exist.",
      });
    }

    const { LastOTPRequestedAt } = userResult.recordset[0];
    const now = new Date();

    if (LastOTPRequestedAt) {
      // Convert SQL timestamp to UTC-based JavaScript Date
      const lastRequestTime = new Date(LastOTPRequestedAt);

      // Ensure proper timezone handling
      const lastRequestUTC = new Date(lastRequestTime); // Keep it as UTC


      const timeDifference = Math.floor((now - lastRequestUTC) / 1000); // Convert ms to seconds

      if (timeDifference < 30) {
        return res.status(429).json({
          error: "OTP_REQUEST_TOO_SOON",
          message: `Please wait ${60 - timeDifference} seconds before requesting a new OTP. ${lastRequestUTC}`,
        });
      }
    }

    // Generate new OTP
    const newOtp = generateOTP();

    // Update OTP and timestamp in DB
    const updateOtpQuery = `
      UPDATE CompanyUser 
      SET OTP = @otp, LastOTPRequestedAt = GETUTCDATE() 
      WHERE Email = @email
    `;
    const updateOtpRequest = new sql.Request();
    updateOtpRequest.input("otp", sql.Int, newOtp);
    updateOtpRequest.input("email", sql.VarChar, email);
    await updateOtpRequest.query(updateOtpQuery);

    // Send OTP email
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const otpTemplatePath = path.join(__dirname, "otpTemplate.html");
    const htmlTemplate = fs.readFileSync(otpTemplatePath, "utf8");

    const htmlContent = htmlTemplate
      .replace("{{otp}}", newOtp)
      .replace("{{year}}", new Date().getFullYear());

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "InternSailor OTP Code",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    console.log(`New OTP sent to ${email}`);
    return res.status(200).json({ message: "New OTP sent successfully." });

  } catch (error) {
    console.error("Error in resending OTP:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});


// Company Dashboard Company information
app.get("/company/dashboard/info/:CompanyID", async (req, res) => {
  try {
    const { CompanyID } = req.params; // Get industryID from request URL

    const pool = await sql.connect(dbConfig);

    const result = await pool
      .request()
      .input("CompanyID", sql.UniqueIdentifier, CompanyID) // Secure parameterized query
      .query(`
        SELECT 
          C.CompanyName, 
          C.CompanyDescription, 
          C.CompanyLogo, 
          C.CompanyLocation,
          I.IndustryName,
          E.NoOfEmployeeType
        FROM company C
        INNER JOIN Industries I ON C.IndustryID = I.IndustryID
        INNER JOIN NoOfEmployees E ON C.NoOfEmployeeID = E.NoOfEmployeeID
        WHERE C.CompanyID = @CompanyID
      `);

    res.json(result.recordset);
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





// Auth Route
app.use("/api/auth", authRoutes);

// Auth Route
app.use("/company-child", CompanyChild);


// JobUpdate
app.use(jobUpdateRoute);

// ---------------------------------------------
// Route to get job and company details
app.get("/company", (req, res) => {
  const query = `
    SELECT
        job.id AS jobId,
        job.name AS jobName,
        job.position,
        job.postedDate,
        job.description AS jobDescription,
        job.requirements AS jobRequirements,
        job.image AS jobImage,
        job.type AS jobType,
        company.CompanyId AS companyId,
        company.CompanyName AS companyName,
        company.CompanyDescription AS companyDescription,
        CONVERT(VARCHAR(MAX), company.CompanyLogo, 1) AS companyLogo,
        company.CompanyLocation
    FROM
        job
    JOIN
        company ON job.companyId = company.CompanyId
    ORDER BY
        job.postedDate DESC`;

  sql
    .query(query)
    .then((result) => {
      res.json(result.recordset);
    })
    .catch((err) => {
      console.error("Error fetching company data:", err);
      res.json({ error: err.message });
    });
});

// -------------------------------------------
app.get("/companyTable", (req, res) => {
  const query = `
    SELECT 
        CompanyName AS companyName,
        CompanyId AS companyId
    FROM
        company`;

  sql
    .query(query)
    .then((result) => {
      res.json(result.recordset);
    })
    .catch((err) => {
      console.error("Error fetching company data:", err);
      res.json({ error: err.message });
    });
});

// Company Registration
app.post("/company", upload.single("image"), (req, res) => {
  const { compName, compDesc, compLoc } = req.body;
  const image = req.file ? req.file.filename : null;

  const query =
    "INSERT INTO company (CompanyName, CompanyDescription, CompanyLogo, CompanyLocation) VALUES (@compName, @compDesc, @image, @compLoc)";
  const request = new sql.Request();
  request.input("compName", sql.NVarChar, compName);
  request.input("compDesc", sql.NVarChar, compDesc);
  request.input("image", sql.NVarChar, image);
  request.input("compLoc", sql.NVarChar, compLoc);

  request
    .query(query)
    .then((result) => {
      res.json("Company has been created!");
    })
    .catch((err) => {
      console.error("Error creating company:", err);
      res.json({ error: err.message });
    });
});


//Delete Job
app.delete('/delete-job/:id', async (req, res) => {
  const jobId = req.params.id;

  // Input validation
  if (!jobId) {
    return res.status(400).json({ error: 'Job ID is required' });
  }

  try {
    // Get the pool from the connection pool manager
    const pool = await sql.connect(dbConfig);

    // SQL query with parameterized input to prevent SQL injection
    const query = `
      DELETE J
      FROM JOB J
      INNER JOIN Company C 
      ON J.CompanyId = C.CompanyId
      WHERE J.ID = @jobId`;

    // Execute the query using parameterized input
    const result = await pool.request()
      .input('jobId', sql.UniqueIdentifier, jobId) // Use the correct SQL type (e.g., UniqueIdentifier for GUIDs)
      .query(query);

    // If no rows were affected, the job was not found
    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Successful deletion
    return res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    // Internal server error
    console.error('Error executing query', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

// Job Registration
app.post("/job", JobUpload.single("image"), (req, res) => {
  const { jobName, position, description, requirements, type, companyId } =
    req.body;

  const image = req.file ? req.file.filename : null;
  const currentDate = moment.tz("Asia/Colombo").format("YYYY-MM-DD HH:mm:ss");

  const query =
    "INSERT INTO job (name, position, postedDate, description, requirements, image, type, companyId) VALUES (@jobName, @position, @currentDate, @description, @requirements, @image, @type, @companyId)";
  const request = new sql.Request();
  request.input("jobName", sql.NVarChar, jobName);
  request.input("position", sql.NVarChar, position);
  request.input("currentDate", sql.DateTime, currentDate);
  request.input("description", sql.NVarChar, description);
  request.input("requirements", sql.NVarChar, requirements);
  request.input("image", sql.NVarChar, image);
  request.input("type", sql.NVarChar, type);

  // Directly pass the companyId as a GUID using sql.UniqueIdentifier
  request.input("companyId", sql.UniqueIdentifier, companyId);

  request
    .query(query)
    .then((result) => {
      res.json("Job created successfully");
    })
    .catch((err) => {
      console.error("Error creating job:", err);
      res
        .status(500)
        .json({ error: "Error creating job", details: err.message });
    });
});


// ---------------------------------------------
// Route to get Job details of company
app.get("/company/getJobs/:companyId", async (req, res) => {
  try {
    const companyId = req.params.companyId;

    // SQL Query
    const query = `
      SELECT 
          job.id AS jobId,
          job.name AS jobName,
          job.position,
          job.postedDate,
          job.description AS jobDescription,
          job.requirements AS jobRequirements,
          job.image AS jobImage,
          job.type AS jobType,
          company.CompanyId AS companyId,
          company.CompanyName AS companyName,
          company.CompanyDescription AS companyDescription,
          CAST(company.CompanyLogo AS VARCHAR(MAX)) AS companyLogo,
          company.CompanyLocation
      FROM job
      JOIN company ON job.companyId = company.CompanyId
      WHERE job.companyId = @companyId
      ORDER BY job.postedDate DESC`;

    // Connect to SQL Server and execute the query
    const pool =  await sql.connect(dbConfig);
    const result = await pool.request()
      .input("companyId", sql.VarChar, companyId) // Use parameterized query
      .query(query);

    res.json(result.recordset);
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});


app.get("/api/check-domain", async (req, res) => {
  try {
    const { domain } = req.query;

    if (!domain) {
      return res.status(400).json({ message: "Domain is required." });
    }

    const pool = await sql.connect(dbConfig);

    const result = await pool.request()
      .input("domain", sql.VarChar, `%@${domain}`)
      .query(`
        SELECT TOP 1 
          cu.CompanyId, 
          c.CompanyName
        FROM CompanyUser cu
        INNER JOIN company c ON cu.CompanyId = c.CompanyId
        WHERE cu.Email LIKE @domain
      `);

    if (result.recordset.length > 0) {
      const { CompanyId, CompanyName } = result.recordset[0];
      return res.status(200).json({ 
        exists: true, 
        CompanyId,
        CompanyName,
        message: "Domain already registered." 
      });
    } else {
      return res.status(200).json({ 
        exists: false, 
        message: "Domain not found." 
      });
    }

  } catch (err) {
    console.error("Error checking domain:", err);
    res.status(500).json({ error: "Server error." });
  }
});




// Step 1: Request to send OTP
app.post("/api/forgot-password", async (req, res) => {
  const { Email } = req.body;

  // Simple validation
  if (!Email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const pool = await sql.connect(dbConfig);

    // Check if the user exists
    const userCheck = await pool.request()
      .input("Email", sql.VarChar, Email)
      .query("SELECT * FROM CompanyUser WHERE Email = @Email");

    if (userCheck.recordset.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Generate OTP and set timestamp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const lastOTPRequestedAt = new Date();

    // Update the user with OTP and timestamp
    await pool.request()
      .input("Email", sql.VarChar, Email)
      .input("OTP", sql.VarChar, otp)
      .input("LastOTPRequestedAt", sql.DateTime, lastOTPRequestedAt)
      .query(`
        UPDATE CompanyUser 
        SET OTP = @OTP, LastOTPRequestedAt = @LastOTPRequestedAt 
        WHERE Email = @Email
      `);

      const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const otpTemplatePath = path.join(__dirname, "otpTemplate.html");
      const htmlTemplate = fs.readFileSync(otpTemplatePath, "utf8");
      const htmlContent = htmlTemplate
        .replace("{{otp}}", otp)
        .replace("{{year}}", new Date().getFullYear());

    // Send the OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: Email,
      subject: "InternSailor Forget Password Code",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent successfully" });

  } catch (err) {
    console.error("Error in forgot-password:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// Step 2: Verify OTP
app.post("/api/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required." });
    }

    await sql.connect(dbConfig);

    const request = new sql.Request();
    request.input("email", sql.NVarChar, email);
    request.input("otp", sql.NVarChar, otp);

    const otpQuery = `SELECT * FROM CompanyUser WHERE Email = @email AND OTP = @otp`;
    const result = await request.query(otpQuery);

    if (result.recordset.length === 0) {
      return res.status(400).json({ error: "INVALID_OR_EXPIRED_OTP", message: "Invalid OTP or expired." });
    }


    return res
      .status(200)
      .json({ message: "OTP verified. Please Change your Password!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Step 3: Reset Password
app.post("/api/reset-password", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const pool = await sql.connect(dbConfig);

    // Step 1: Check if OTP exists and is not null for the user
    const otpCheck = await pool.request()
      .input("email", sql.VarChar, email)
      .query("SELECT OTP FROM CompanyUser WHERE Email = @email");

    const user = otpCheck.recordset[0];

    if (!user || !user.OTP) {
      return res.status(403).json({ message: "OTP verification required before resetting password" });
    }

    // Step 2: Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Step 3: Update password and clear OTP
    await pool.request()
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, hashedPassword)
      .query(`
        UPDATE CompanyUser 
        SET Password = @password, OTP = NULL
        WHERE Email = @email
      `);

    res.status(200).json({ message: "Password reset successful" });

  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Server error" });
  }
});





// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
