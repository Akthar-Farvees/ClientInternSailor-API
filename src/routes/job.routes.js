import express from 'express';
import { createJob, jobUpdate, jobDelete } from '../controllers/jobs.controller.js';
// import JobUpload from '../middlewares/middleware.job.poster.upload.js';
import upload from '../middlewares/middleware.company.logo.upload.js';

const router = express.Router();

router.post("/", upload.single("image"), createJob);
router.put("/:jobId", jobUpdate);
router.delete("/:id", jobDelete);

export default router;