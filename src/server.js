import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from './app.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const server = http.createServer(app);

const PORT = process.env.PORT || 5555;

async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL with Prisma');
    
    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database Connection Failed: ', error);
    process.exit(1);
  }
}

startServer();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Disconnected from database');
  process.exit(0);
});
