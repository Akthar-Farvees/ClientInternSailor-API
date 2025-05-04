import prisma from "../config/prisma.config.js";

export const companyJobData = async (req, res) => {
  try {
    const jobsWithCompany = await prisma.job.findMany({
      orderBy: {
        postedDate: "desc",
      },
      select: {
        id: true,
        name: true,
        position: true,
        postedDate: true,
        description: true,
        requirements: true,
        image: true,
        type: true,
        company: {
          select: {
            CompanyId: true,
            CompanyName: true,
            CompanyDescription: true,
            CompanyLogo: true,
            CompanyLocation: true,
          },
        },
      },
    });

    // Transforming to match your original SQL alias style
    const formatted = jobsWithCompany.map((job) => ({
      jobId: job.id,
      jobName: job.name,
      position: job.position,
      postedDate: job.postedDate,
      jobDescription: job.description,
      jobRequirements: job.requirements,
      jobImage: job.image,
      jobType: job.type,
      companyId: job.company?.CompanyId,
      companyName: job.company?.CompanyName,
      companyDescription: job.company?.CompanyDescription,
      companyLogo: job.company?.CompanyLogo,
      companyLocation: job.company?.CompanyLocation,
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const companyJobDataById = async (req, res) => {
  try {
    const companyId = req.params.companyId;

    const jobs = await prisma.job.findMany({
      where: {
        companyId: companyId,
      },
      orderBy: {
        postedDate: 'desc',
      },
      select: {
        id: true,
        name: true,
        position: true,
        postedDate: true,
        description: true,
        requirements: true,
        image: true,
        type: true,
        company: {
          select: {
            CompanyId: true,
            CompanyName: true,
            CompanyDescription: true,
            CompanyLogo: true,
            CompanyLocation: true,
          }
        }
      }
    });

    // Reshape data to match your original output structure
    const formattedJobs = jobs.map(job => ({
      jobId: job.id,
      jobName: job.name,
      position: job.position,
      postedDate: job.postedDate,
      jobDescription: job.description,
      jobRequirements: job.requirements,
      jobImage: job.image,
      jobType: job.type,
      companyId: job.company?.CompanyId,
      companyName: job.company?.CompanyName,
      companyDescription: job.company?.CompanyDescription,
      companyLogo: job.company?.CompanyLogo,
      companyLocation: job.company?.CompanyLocation,
    }));

    res.json(formattedJobs);
  } catch (err) {
    console.error("Prisma Error:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
}

export default {
    companyJobData,
    companyJobDataById
};
