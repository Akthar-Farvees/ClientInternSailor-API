import DotEnv from 'dotenv';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sql from 'mssql';
import nodemailer from 'nodemailer';




const app = express();
app.use(express.json());

// SQL Server Configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: { encrypt: true, trustServerCertificate: true }
};

// Nodemailer Transporter (for OTP emails)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Utility Function: Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// **USER REGISTRATION**
app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, companyMobile, companyName, companyImage, companyLocation } = req.body;
        
        if (!firstName || !lastName || !username || !email || !password || !companyName) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const emailDomain = email.split('@')[1];

        // Connect to DB
        await sql.connect(dbConfig);

        // Check if company exists in DB
        const companyCheckQuery = `SELECT * FROM Company WHERE CompanyName = @companyName`;
        const companyCheck = await sql.query(companyCheckQuery, { companyName });

        if (companyCheck.recordset.length === 0) {
            // Insert Company if not exists
            const insertCompanyQuery = `INSERT INTO Company (CompanyName, CompanyImage, CompanyLocation) VALUES (@companyName, @companyImage, @companyLocation)`;
            await sql.query(insertCompanyQuery, { companyName, companyImage, companyLocation });
        }

        // Get company domain name
        const companyQuery = `SELECT CompanyName FROM Company WHERE CompanyName = @companyName`;
        const companyData = await sql.query(companyQuery, { companyName });

        if (companyData.recordset.length === 0) {
            return res.status(400).json({ message: "Company not found." });
        }

        // **Domain Matching Logic**
        if (!email.includes(companyData.recordset[0].CompanyName.toLowerCase())) {
            // Store user in pending approval
            const insertPendingQuery = `
                INSERT INTO Authentication (FirstName, LastName, Username, Email, Password, CompanyMobile, Status) 
                VALUES (@firstName, @lastName, @username, @email, @hashedPassword, @companyMobile, 'PENDING_ADMIN')`;
            await sql.query(insertPendingQuery, { firstName, lastName, username, email, hashedPassword, companyMobile });

            return res.status(200).json({ message: "Waiting for admin approval." });
        } else {
            // **Send OTP immediately**
            const otp = generateOTP();
            const insertUserQuery = `
                INSERT INTO Authentication (FirstName, LastName, Username, Email, Password, CompanyMobile, Status, OTP) 
                VALUES (@firstName, @lastName, @username, @email, @hashedPassword, @companyMobile, 'OTP_PENDING', @otp)`;
            await sql.query(insertUserQuery, { firstName, lastName, username, email, hashedPassword, companyMobile, otp });

            // Send OTP email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Your OTP Code',
                text: `Your OTP code is: ${otp}`
            };
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: "OTP sent to email. Please verify." });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// **VERIFY OTP**
app.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ message: "Email and OTP are required." });
        }

        await sql.connect(dbConfig);
        const otpQuery = `SELECT * FROM Authentication WHERE Email = @email AND OTP = @otp AND Status = 'OTP_PENDING'`;
        const result = await sql.query(otpQuery, { email, otp });

        if (result.recordset.length === 0) {
            return res.status(400).json({ message: "Invalid OTP or expired." });
        }

        // Update status to ACTIVE
        const updateQuery = `UPDATE Authentication SET Status = 'ACTIVE', OTP = NULL WHERE Email = @email`;
        await sql.query(updateQuery, { email });

        return res.status(200).json({ message: "Account verified successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// **ADMIN APPROVAL (For pending users)**
app.post('/admin-approve', async (req, res) => {
    try {
        const { email } = req.body;

        await sql.connect(dbConfig);
        const userQuery = `SELECT * FROM Authentication WHERE Email = @email AND Status = 'PENDING_ADMIN'`;
        const userResult = await sql.query(userQuery, { email });

        if (userResult.recordset.length === 0) {
            return res.status(400).json({ message: "No pending approvals for this email." });
        }

        // Generate OTP for admin-approved users
        const otp = generateOTP();
        const updateQuery = `UPDATE Authentication SET Status = 'OTP_PENDING', OTP = @otp WHERE Email = @email`;
        await sql.query(updateQuery, { email, otp });

        // Send OTP email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your account has been approved. Your OTP is: ${otp}`
        };
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "Admin approved. OTP sent." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
