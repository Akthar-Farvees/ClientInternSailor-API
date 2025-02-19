import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sql from "mssql";
import dotenv from "dotenv";
import dbConfig, { connectDB } from "../database/dbConfig.js"; 

dotenv.config();

const router = express.Router();

connectDB();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
        await sql.connect(dbConfig);
        console.log("Database connected successfully");

        const request = new sql.Request();
        request.input("email", sql.VarChar, email);

        const query = `SELECT CompanyUserId, Email, Password, Status FROM CompanyUser WHERE Email = @email`;
        console.log("Executing query:", query);

        const result = await request.query(query);
        console.log("Query result:", result.recordset);

        if (result.recordset.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const user = result.recordset[0];

        // Check user status
        if (user.Status === "OTP_PENDING") {
            return res.status(403).json({ error: "OTP verification pending. Please verify your email." });
        } else if (user.Status === "WAITING_FOR_ADMIN") {
            return res.status(403).json({ error: "Waiting for admin approval. Please contact support." });
        } else if (user.Status !== "ACTIVE") {
            return res.status(403).json({ error: "Your account is not active. Please contact support." });
        }

        const isMatch = await bcrypt.compare(password, user.Password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.ID, email: user.Email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            token,
            user: { id: user.ID, email: user.Email },
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error", details: error.message });
    }
});

export default router;
