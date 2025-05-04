import { companyJobData, companyJobDataById } from '../controllers/company.job.controller.js'
import express from 'express';

const router = express.Router();

router.get("/", companyJobData);
router.get("/:companyId", companyJobDataById);

export default router;