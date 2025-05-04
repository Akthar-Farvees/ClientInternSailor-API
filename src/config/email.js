import nodemailer from 'nodemailer';
import DotEnv from 'dotenv';

DotEnv.config(); // Load .env variables

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});
