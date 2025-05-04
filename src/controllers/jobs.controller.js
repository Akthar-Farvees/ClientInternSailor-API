import prisma from "../config/prisma.config.js";
import moment from "moment-timezone";

export const createJob = async (req, res) => {
    const { jobName, position, description, requirements, type, companyId } = req.body;
    const image = req.file ? req.file.filename : null;
  
    // Format posted date in Asia/Colombo time
    const postedDate = moment.tz("Asia/Colombo").toDate();
  
    // Input validation
    if (!jobName || !position || !description || !type || !companyId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      // Check if company exists before linking
      const company = await prisma.company.findUnique({
        where: { CompanyId: companyId },
      });
  
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }
  
      // Insert job into database
      await prisma.job.create({
        data: {
          name: jobName,
          position,
          postedDate,
          description,
          requirements,
          image,
          type,
          company: {
            connect: {
              CompanyId: companyId,
            },
          },
        },
      });
  
      res.status(201).json({ message: "Job created successfully" });
    } catch (error) {
      console.error("Error creating job:", error);
      res.status(500).json({ error: "Error creating job", details: error.message });
    }
}

export const jobUpdate = async (req, res) => {
    const { jobId } = req.params;
    const {
      jobName,
      jobPosition,
      jobDescription,
      jobRequirements,
      jobType,
    } = req.body;
  
    console.log("Received data:", {
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
      const updatedJob = await prisma.job.update({
        where: {
          id: jobId,
        },
        data: {
          name: jobName,
          position: jobPosition,
          description: jobDescription,
          requirements: jobRequirements,
          type: jobType,
        },
      });
  
      res.json({ message: "Job updated successfully!", job: updatedJob });
    } catch (error) {
      console.error("Error updating job:", error);
  
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Job not found" });
      }
  
      res.status(500).json({ error: "Internal server error" });
    }
  };

export const jobDelete = async (req, res) => {
    const jobId = req.params.id;

    // Input validation
    if (!jobId) {
      return res.status(400).json({ error: "Job ID is required" });
    }
  
    try {
      // Check if the job exists and is linked to a company
      const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { company: true },
      });
  
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
  
      if (!job.company) {
        return res.status(400).json({ error: "Job is not associated with a company" });
      }
  
      // Delete the job
      await prisma.job.delete({
        where: { id: jobId },
      });
  
      return res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      console.error("Error deleting job:", error);
      return res.status(500).json({ error: "Database error" });
    }
};

  export default {
    createJob,
    jobUpdate,
    jobDelete
  }
  