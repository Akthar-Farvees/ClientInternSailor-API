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


    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !userMobile ||
      !companyName ||
      !companyDescription ||
      !companyLocation ||
      !industryId ||
      !noEmployeeId ||
      !departmentId
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

    const departmentIDs = typeof departmentId === "string" ? departmentId.split(",") : departmentId;


    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Connecting to database...");
    await sql.connect(dbConfig);

    // Check if user exists already by email or username
    const userCheckQuery = `SELECT * FROM CompanyUser WHERE Email = @email OR username = @username`;
    const userCheckRequest = new sql.Request();
    userCheckRequest.input("email", sql.VarChar, email);
    userCheckRequest.input("username", sql.VarChar, username); // Declare username parameter here
    const userCheck = await userCheckRequest.query(userCheckQuery);

    if (userCheck.recordset.length > 0) {
      return res.status(400).json({
        error: "EMAIL_USERNAME_ALREADY_REGISTERED",
        message: "Email or Username is already registered.",
      });
    }

    // Generate OTP
    const otp = generateOTP();

    const insertCompanyQuery = `
      INSERT INTO Company (CompanyName, CompanyDescription, CompanyLogo, CompanyLocation, IndustryID, NoOfEmployeeID) 
      OUTPUT INSERTED.CompanyId
      VALUES (@companyName, @companyDescription, @companyLogo, @companyLocation, @industryId, @noEmployeeId)
    `;
    const insertCompanyRequest = new sql.Request();
    insertCompanyRequest.input("companyName", sql.VarChar, companyName);
    insertCompanyRequest.input("companyDescription", sql.VarChar, companyDescription);
    insertCompanyRequest.input("companyLogo", sql.VarChar, companyLogo);
    insertCompanyRequest.input("companyLocation", sql.VarChar, companyLocation);
    insertCompanyRequest.input("IndustryID", sql.UniqueIdentifier, industryId);
    insertCompanyRequest.input("noEmployeeId", sql.UniqueIdentifier, noEmployeeId);

    const companyResult = await insertCompanyRequest.query(insertCompanyQuery);
    const companyId = companyResult.recordset[0].CompanyId; // Get the inserted CompanyId


    for (const depId of departmentIDs) {
      const insertDepartmentQuery = `
        INSERT INTO CompanyDepartment (CompanyId, DepartmentId) VALUES (@companyId, @departmentId)
      `;
      const insertDepartmentRequest = new sql.Request();
      insertDepartmentRequest.input("companyId", sql.UniqueIdentifier, companyId);
      insertDepartmentRequest.input("departmentId", sql.UniqueIdentifier, depId);
      await insertDepartmentRequest.query(insertDepartmentQuery);
    }


    // Insert into CompanyUser with the retrieved CompanyId
    const insertUserQuery = `
      INSERT INTO CompanyUser (FirstName, LastName, Username, Email, Password, UserMobile, Status, OTP, LastOTPRequestedAt, CompanyCreatedDate, CompanyId) 
      VALUES (@firstName, @lastName, @username, @email, @hashedPassword, @userMobile, 'OTP_PENDING', @otp, GETUTCDATE(), GETDATE(), @companyId)
    `;
    const insertUserRequest = new sql.Request();
    insertUserRequest.input("firstName", sql.VarChar, firstName);
    insertUserRequest.input("lastName", sql.VarChar, lastName);
    insertUserRequest.input("username", sql.VarChar, username);
    insertUserRequest.input("email", sql.VarChar, email);
    insertUserRequest.input("hashedPassword", sql.VarChar, hashedPassword);
    insertUserRequest.input("userMobile", sql.VarChar, userMobile);
    insertUserRequest.input("otp", sql.Int, otp);
    insertUserRequest.input("companyId", sql.UniqueIdentifier, companyId); // Add CompanyId

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
      subject: "Your OTP Code",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    console.log("OTP sent.");
    return res
      .status(200)
      .json({ message: "OTP sent to email. Please verify." });
  } catch (error) {
    console.error("Error in registration:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
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

    console.log(`Resend OTP requested for: ${email}`);

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
      subject: "Your OTP Code (Resent)",
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




// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
