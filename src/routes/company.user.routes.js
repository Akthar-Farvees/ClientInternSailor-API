import express from 'express';
import upload from '../middlewares/middleware.company.logo.upload.js';
import { 
  companyUserRegistration, 
  companyUserVerifyEmail, 
  companyUserAdminApproval,
  companyUserResendEmailOTP
} from '../controllers/company.user.controller.js';

const router = express.Router();


router.post("/register", upload.single("companyLogo"), companyUserRegistration);
router.post("/verify-email", companyUserVerifyEmail);
router.post("/admin-approval", companyUserAdminApproval);
router.post("/resend-email-otp", companyUserResendEmailOTP);

export default router;