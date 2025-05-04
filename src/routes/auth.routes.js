import express from 'express';
import { 
  companyUserAuth
} from '../controllers/auth.controller.js';
import loginLimiter from '../middlewares//middleware.rate.limit.js'

const router = express.Router();


router.post("/login" , loginLimiter, companyUserAuth);

export default router;