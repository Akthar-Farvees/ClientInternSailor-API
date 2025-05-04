import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import companyUserRoutes from './routes/company.user.routes.js';
import companyDashboardRoutes from './routes/company.dashboard.routes.js';
import authRoutes from './routes/auth.routes.js';
import jobRoutes from './routes/job.routes.js';
import companyJobRoutes from './routes/company.job.routes.js';
import changePasswordRoutes from './routes/change.password.routes.js';

const app = express();
dotenv.config();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization', 
};

app.use(cors(corsOptions)); 
// app.use(helmet());
app.use(express.json());

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', process.env.CLIENT_URL, 'http://localhost:5050'],
      connectSrc: ["'self'", process.env.CLIENT_URL],
      fontSrc: ["'self'", 'https:', 'data:'],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  }
}));



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api/company/user', authRoutes);
app.use('/api/company/user', companyUserRoutes);
app.use('/api/company/dashboard', companyDashboardRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/company/job', companyJobRoutes);
app.use('/api/company/user/password', changePasswordRoutes);
app.use('/api/images', cors(corsOptions), express.static(path.join(__dirname, 'assets', 'images')));
app.use('/api/posterImage', cors(corsOptions), express.static(path.join(__dirname, 'assets', 'posterImage')));


export default app;