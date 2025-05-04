import prisma from '../config/prisma.config.js';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';


// Send OTP to Email
export const sendOTPToEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const user = await prisma.companyuser.findUnique({ where: { Email: email } });

    if (!user) {
      return res.status(404).json({ code: 'EMAIL_NOT_FOUND', message: "Email not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const lastOTPRequestedAt = new Date();

    await prisma.companyuser.update({
      where: { Email: email },
      data: { OTP: otp, LastOTPRequestedAt: lastOTPRequestedAt }
    });

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const htmlTemplate = fs.readFileSync(path.join(__dirname, '../templates/otp.email/index.html'), 'utf-8');
    const htmlContent = htmlTemplate
      .replace('{{otp}}', otp)
      .replace('{{year}}', new Date().getFullYear().toString());

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'InternSailor Forget Password Code',
      html: htmlContent
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent successfully" });

  } catch (error) {
    console.error("Error in sendOTPToEmail:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify OTP
export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required." });
  }

  try {
    const user = await prisma.companyuser.findFirst({
      where: { Email: email, OTP: otp }
    });

    if (!user) {
      return res.status(400).json({ error: "INVALID_OR_EXPIRED_OTP", message: "Invalid OTP or expired." });
    }

    res.status(200).json({ message: "OTP verified. Please change your password!" });

  } catch (error) {
    console.error("verifyOTP error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const user = await prisma.companyuser.findUnique({
      where: { Email: email }
    });

    if (!user || !user.OTP) {
      return res.status(403).json({ message: "OTP verification required before resetting password" });
    }

    const isSame = await bcrypt.compare(password, user.Password || '');
    if (isSame) {
      return res.status(400).json({
        message: "New password must be different from your previous password"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.companyuser.update({
      where: { Email: email },
      data: {
        Password: hashedPassword,
        OTP: null
      }
    });

    res.status(200).json({ message: "Password reset successful" });

  } catch (err) {
    console.error("resetPassword error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Submit Feedback
export const submitFeedback = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields (Name, Email, and Message) are required.' });
  }

  try {
    await prisma.feedbacks.create({
      data: {
        FeedbackId: crypto.randomUUID(),
        Name: name,
        Email: email,
        Message: message,
        CreatedDate: new Date()
      }
    });

    res.status(200).json({ message: 'Feedback submitted successfully!' });

  } catch (error) {
    console.error("submitFeedback error:", error);
    res.status(500).json({ message: 'An error occurred while submitting feedback.' });
  }
};
