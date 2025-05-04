import express from 'express';
import {
  sendOTPToEmail,
  verifyOTP,
  resetPassword,
  submitFeedback
} from '../controllers/change.password.controller.js';

const router = express.Router();

router.post('/forgot-password', sendOTPToEmail);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);
router.post('/feedback', submitFeedback);

export default router;
