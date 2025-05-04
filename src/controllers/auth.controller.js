import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../config/prisma.config.js";

dotenv.config();

export const companyUserAuth = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Look for user by email
        const user = await prisma.companyuser.findUnique({
            where: { Email: email },
        });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Check user status
        if (user.Status === "OTP_PENDING") {
            return res.status(403).json({ error: "OTP_PENDING" });
        } else if (user.Status === "WAITING_FOR_ADMIN") {
            return res.status(403).json({ error: "WAITING_FOR_ADMIN" });
        } else if (user.Status !== "ACTIVE") {
            return res.status(403).json({ error: "Your account is not activated." });
        }

        const isMatch = await bcrypt.compare(password, user.Password || "");

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.CompanyUserId, email: user.Email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            token,
            user: {
                id: user.CompanyUserId,
                email: user.Email,
                companyId: user.CompanyId
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error", details: error.message });
    }
};

export default {
    companyUserAuth
};
