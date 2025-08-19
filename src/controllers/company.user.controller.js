import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { transporter } from '../config/email.js';
import prisma from '../config/prisma.config.js'
import cloudinary from '../config/cloudinary.config.js';
import streamifier from 'streamifier';

// Helper function for OTP generation
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ===== BACKEND CONTROLLER FIX =====
export const companyUserRegistration = async (req, res) => {
  try {
    console.log("Request received:", req.body);
    console.log("File received:", req.file); // Add this for debugging

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
      noEmployeeId,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !username || !email || !companyName || !userMobile || !password) {
      return res.status(400).json({
        error: "MISSING_REQUIRED_FIELDS",
        message: "Please fill in all required fields.",
      });
    }

    let companyLogo = null;
    if (req.file) {
      try {
        const streamUpload = () => {
          return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              {
                folder: 'company_logos',
                resource_type: 'image',
              },
              (error, result) => {
                if (result) resolve(result.secure_url);
                else reject(error);
              }
            );
            streamifier.createReadStream(req.file.buffer).pipe(stream);
          });
        };
        companyLogo = await streamUpload();
        console.log("Logo uploaded successfully:", companyLogo);
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({
          error: "FILE_UPLOAD_FAILED",
          message: "Failed to upload company logo.",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user exists already by email or username
    const userExists = await prisma.companyuser.findFirst({
      where: {
        OR: [{ Email: email }, { Username: username }],
      },
    });

    if (userExists) {
      return res.status(400).json({
        error: "EMAIL_USERNAME_ALREADY_REGISTERED",
        message: "Email or Username is already registered.",
      });
    }

    const otp = generateOTP();
    let companyId;

    // Check if company fields are all present or not
    const isCompanyFieldsEmpty =
      !industryId ||
      !noEmployeeId ||
      !companyLogo ||
      !companyLocation ||
      !companyDescription;

    if (isCompanyFieldsEmpty) {
      // Just get existing CompanyId from Company table
      const existingCompany = await prisma.company.findFirst({
        where: {
          CompanyName: companyName,
        },
        select: {
          CompanyId: true,
        },
      });

      if (!existingCompany) {
        return res.status(400).json({
          error: "COMPANY_NOT_FOUND",
          message: "Company not found with given name. Please provide company details.",
        });
      }

      companyId = existingCompany.CompanyId;
    } else {
      // Insert into Company table with proper integer conversion
      const newCompany = await prisma.company.create({
        data: {
          CompanyName: companyName,
          CompanyDescription: companyDescription,
          CompanyLogo: companyLogo,
          CompanyLocation: companyLocation,
          IndustryID: parseInt(industryId), // Ensure it's an integer
          NoOfEmployeeID: parseInt(noEmployeeId), // Ensure it's an integer
        },
      });

      companyId = newCompany.CompanyId;
    }

    // Insert into CompanyUser table
    await prisma.companyuser.create({
      data: {
        FirstName: firstName,
        LastName: lastName,
        Username: username,
        Email: email,
        Password: hashedPassword,
        UserMobile: userMobile,
        Status: "OTP_PENDING",
        OTP: otp,
        LastOTPRequestedAt: new Date(),
        CompanyCreatedDate: new Date(),
        CompanyId: companyId,
      },
    });

    // Send OTP email
    try {
      const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const otpTemplatePath = path.join(__dirname, "../templates/otp.email/index.html");
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
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Don't fail the registration if email fails, but log it
    }

    return res
      .status(200)
      .json({ message: "Registration successful. OTP sent to email. Please verify." });
  } catch (error) {
    console.error("Error in registration:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Verify OTP API
export const companyUserVerifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required." })
    }

    const user = await prisma.companyuser.findFirst({
      where: {
        Email: email,
        OTP: otp,
        Status: "OTP_PENDING",
      },
    })

    if (!user) {
      return res.status(400).json({ error: "INVALID_OR_EXPIRED_OTP", message: "Invalid OTP or expired." })
    }

    // Update status to waiting for admin approval
    await prisma.companyuser.update({
      where: {
        CompanyUserId: user.CompanyUserId,
      },
      data: {
        Status: "WAITING_FOR_ADMIN",
      },
    })

    return res.status(200).json({ message: "OTP verified. Waiting for admin approval." })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

// Admin Approval API
export const companyUserAdminApproval = async (req, res) => {
  try {
    const { email } = req.body

    const user = await prisma.companyuser.findFirst({
      where: {
        Email: email,
        Status: "WAITING_FOR_ADMIN",
      },
    })

    if (!user) {
      return res.status(400).json({ message: "No pending approvals for this email." })
    }

    // Approve user and activate their account
    await prisma.companyuser.update({
      where: {
        CompanyUserId: user.CompanyUserId,
      },
      data: {
        Status: "ACTIVE",
        OTP: null,
      },
    })

    return res.status(200).json({ message: "Admin approved. User account is now active." })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

// Resend OTP API
export const companyUserResendEmailOTP = async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ message: "Email is required." })
    }

    // Fetch user's last OTP request time
    const user = await prisma.companyuser.findFirst({
      where: {
        Email: email,
      },
      select: {
        CompanyUserId: true,
        OTP: true,
        LastOTPRequestedAt: true,
      },
    })

    if (!user) {
      return res.status(404).json({
        error: "USER_NOT_FOUND",
        message: "User with this email does not exist.",
      })
    }

    const { LastOTPRequestedAt } = user
    const now = new Date()

    if (LastOTPRequestedAt) {
      const lastRequestUTC = new Date(LastOTPRequestedAt)
      const timeDifference = Math.floor((now - lastRequestUTC) / 1000) // Convert ms to seconds

      if (timeDifference < 30) {
        return res.status(429).json({
          error: "OTP_REQUEST_TOO_SOON",
          message: `Please wait ${60 - timeDifference} seconds before requesting a new OTP. ${lastRequestUTC}`,
        })
      }
    }

    // Generate new OTP
    const newOtp = generateOTP()

    // Update OTP and timestamp in DB
    await prisma.companyuser.update({
      where: {
        CompanyUserId: user.CompanyUserId,
      },
      data: {
        OTP: newOtp,
        LastOTPRequestedAt: now,
      },
    })

    // Send OTP email
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const otpTemplatePath = path.join(__dirname, "../templates/otp.email/index.html")
    const htmlTemplate = fs.readFileSync(otpTemplatePath, "utf8")

    const htmlContent = htmlTemplate.replace("{{otp}}", newOtp).replace("{{year}}", new Date().getFullYear())

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "InternSailor OTP Code",
      html: htmlContent,
    }

    await transporter.sendMail(mailOptions)

    console.log(`New OTP sent to ${email}`)
    return res.status(200).json({ message: "New OTP sent successfully." })
  } catch (error) {
    console.error("Error in resending OTP:", error)
    return res.status(500).json({ message: "Internal Server Error", error: error.message })
  }
}


// Named exports for individual functions
export default { 
  companyUserRegistration,
  companyUserVerifyEmail,
  companyUserAdminApproval,
  companyUserResendEmailOTP
 };