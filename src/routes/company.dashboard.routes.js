import express from 'express';
import { 
  companyDashboardInformationById,
  companySubCategories,
  companyWithCompanyId,
  companyDomainCheckWithEmail
} from '../controllers/company.controller.js';

const router = express.Router();


router.get("/info/:CompanyID" , companyDashboardInformationById);
router.get("/sub-types" , companySubCategories);
router.get("/id" , companyWithCompanyId);
router.get("/domain" , companyDomainCheckWithEmail);

export default router;