import express from "express";
import sql from "mssql";
import dbConfig, { connectDB } from "../database/dbConfig.js";

const router = express.Router();

router.put("/update-job/:jobId", async (req, res) => {
    const { jobId } = req.params;
    const {
      jobName,
      jobPosition,
      jobDescription,
      jobRequirements,
      jobType,
    } = req.body;

    console.log('Received data:', {
        jobName,
        jobPosition,
        jobDescription,
        jobRequirements,
        jobType,
      });
      
  
    // Basic validation
    if (
      !jobName ||
      !jobPosition ||
      !jobDescription ||
      !jobRequirements ||
      !jobType
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      const pool = await sql.connect(dbConfig);
  
      const result = await pool
        .request()
        .input("JobId", sql.UniqueIdentifier, jobId)
        .input("Name", sql.NVarChar(255), jobName)
        .input("Position", sql.NVarChar(255), jobPosition)
        .input("Description", sql.NVarChar(sql.MAX), jobDescription)
        .input("Requirements", sql.NVarChar(sql.MAX), jobRequirements)
        .input("Type", sql.NVarChar(100), jobType)
        .query(`
          UPDATE Job
          SET
            name = @Name,
            position = @Position,
            description = @Description,
            requirements = @Requirements,
            type = @Type
          WHERE id = @JobId
        `);
  
      if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ error: "Job not found" });
      }
  
      res.json({ message: "Job updated successfully!" });
    } catch (error) {
      console.error("Error updating job:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
export default router;
