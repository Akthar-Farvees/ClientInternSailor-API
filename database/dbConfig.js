import dotenv from "dotenv";
import sql from "mssql";

dotenv.config(); // Load environment variables

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: { encrypt: true, trustServerCertificate: true },
};

// Function to establish a database connection
export const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default dbConfig;
