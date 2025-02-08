import DotEnv from "dotenv";
import express from "express";
import cors from "cors";
import fs from "fs";
import multer from "multer";
import path from "path";
import moment from "moment-timezone";
import sql from "mssql"; // Import the mssql package

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";

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
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // SQL Server host
  database: process.env.DB_NAME, // Database name
  options: { encrypt: true, trustServerCertificate: true },
};

// Database connectivity check and connection
sql
  .connect(dbConfig)
  .then((pool) => {
    console.log("Connected to SQL Server");
    // You can now query the database
  })
  .catch((err) => {
    console.error("Error connecting to SQL Server:", err);
  });

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
      !companyLocation
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

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
      return res
        .status(400)
        .json({ message: "Email or Username is already registered." });
    }

    // Generate OTP
    const otp = generateOTP();
    const insertUserQuery = `
        INSERT INTO CompanyUser (FirstName, LastName, Username, Email, Password, UserMobile, Status, OTP) 
        VALUES (@firstName, @lastName, @username, @email, @hashedPassword, @userMobile, 'OTP_PENDING', @otp)
      `;
    const insertUserRequest = new sql.Request();
    insertUserRequest.input("firstName", sql.VarChar, firstName);
    insertUserRequest.input("lastName", sql.VarChar, lastName);
    insertUserRequest.input("username", sql.VarChar, username);
    insertUserRequest.input("email", sql.VarChar, email);
    insertUserRequest.input("hashedPassword", sql.VarChar, hashedPassword);
    insertUserRequest.input("userMobile", sql.VarChar, userMobile);
    insertUserRequest.input("otp", sql.Int, otp);
    await insertUserRequest.query(insertUserQuery);

    // Insert into Company table
    const insertCompanyQuery = `
      INSERT INTO Company (CompanyName, CompanyDescription, CompanyLogo, CompanyLocation) 
      VALUES (@companyName, @companyDescription, @companyLogo, @companyLocation)
    `;
    const insertCompanyRequest = new sql.Request();
    insertCompanyRequest.input("companyName", sql.VarChar, companyName);
    insertCompanyRequest.input("companyDescription", sql.VarChar, companyDescription);
    insertCompanyRequest.input("companyLogo", sql.VarChar, companyLogo);
    insertCompanyRequest.input("companyLocation", sql.VarChar, companyLocation);
    await insertCompanyRequest.query(insertCompanyQuery);

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
      return res.status(400).json({ message: "Invalid OTP or expired." });
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
app.post("/job", JobUpload.single("poster"), (req, res) => {
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

// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
