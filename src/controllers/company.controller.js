import prisma from "../config/prisma.config.js";

export const companyDashboardInformationById = async (req, res) => {
  try {
    const { CompanyID } = req.params;

    const companyInfo = await prisma.company.findUnique({
      where: {
        CompanyId: CompanyID,
      },
      select: {
        CompanyName: true,
        CompanyDescription: true,
        CompanyLogo: true,
        CompanyLocation: true,
        industries: {
          select: {
            IndustryName: true,
          },
        },
        noofemployees: {
          select: {
            NoOfEmployeeType: true,
          },
        },
      },
    });

    if (!companyInfo) {
      return res.status(404).json({ error: "Company not found" });
    }

    // Format the response to match the expected structure
    const formattedResponse = [
      {
        CompanyName: companyInfo.CompanyName,
        CompanyDescription: companyInfo.CompanyDescription,
        CompanyLogo: companyInfo.CompanyLogo,
        CompanyLocation: companyInfo.CompanyLocation,
        IndustryName: companyInfo.industries?.IndustryName,
        NoOfEmployeeType: companyInfo.noofemployees?.NoOfEmployeeType,
      },
    ];

    res.json(formattedResponse);
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const companySubCategories = async (req, res) => {
  try {
    const [industries, employees, departments] = await Promise.all([
      prisma.industries.findMany({
        select: { IndustryID: true, IndustryName: true },
      }),
      prisma.noofemployees.findMany({
        select: { NoOfEmployeeID: true, NoOfEmployeeType: true },
      }),
      prisma.departments.findMany({
        select: { DepartmentID: true, DepartmentName: true },
      }),
    ]);

    const list = [
      ...industries.map((item) => ({
        Category: "Industry",
        ID: item.IndustryID,
        Name: item.IndustryName,
      })),
      ...employees.map((item) => ({
        Category: "Employees",
        ID: item.NoOfEmployeeID,
        Name: item.NoOfEmployeeType,
      })),
      ...departments.map((item) => ({
        Category: "Department",
        ID: item.DepartmentID,
        Name: item.DepartmentName,
      })),
    ];

    res.json(list);
  } catch (error) {
    console.error("Error fetching lists:", error);
    res.status(500).json({ error: error.message });
  }
};

export const companyWithCompanyId = async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      select: {
        CompanyName: true,
        CompanyId: true,
      },
    });

    // Format field names to match the original response
    const formatted = companies.map((company) => ({
      companyName: company.CompanyName,
      companyId: company.CompanyId,
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const companyDomainCheckWithEmail = async (req, res) => {
  try {
    const { domain } = req.query;

    if (!domain) {
      return res.status(400).json({ message: "Domain is required." });
    }

    // List of blocked domains
    const blockedDomains = [
      'tutanota.com', 'yandex.com', 'mail.com', 'aol.com', 'gmx.com',
      'icloud.com', 'zoho.com', 'protonmail.com', 'yahoo.com', 'outlook.com', 'gmail.com'
    ];

    // Check if the domain is in the blocked list
    if (blockedDomains.includes(domain.toLowerCase())) {
      return res.status(200).json({
        exists: false,
        message: "Domain not found."
      });
    }

    const emailPattern = `%@${domain}`;

    const user = await prisma.companyuser.findFirst({
      where: {
        Email: {
          endsWith: `@${domain}`,
        },
      },
      select: {
        CompanyId: true,
        company: {
          select: {
            CompanyName: true,
          },
        },
      },
    });

    if (user) {
      return res.status(200).json({
        exists: true,
        CompanyId: user.CompanyId,
        CompanyName: user.company?.CompanyName,
        message: "Domain already registered."
      });
    } else {
      return res.status(200).json({
        exists: false,
        message: "Domain not found."
      });
    }

  } catch (err) {
    console.error("Error checking domain:", err);
    res.status(500).json({ error: "Server error." });
  }
}


export default {
  companyDashboardInformationById,
  companySubCategories,
  companyWithCompanyId
};
