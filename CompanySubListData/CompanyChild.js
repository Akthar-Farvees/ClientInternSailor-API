import express from "express";
import sql from "mssql";
import dotenv from "dotenv";
import dbConfig, { connectDB } from "../database/dbConfig.js"; 

dotenv.config();

const router = express.Router();

connectDB();

// Fetch All List Data
router.get("/lists", async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig); 
    let result = await pool.request().query(`
      SELECT 'Industry' AS Category, IndustryID AS ID, IndustryName AS Name FROM Industries
      UNION ALL
      SELECT 'Employees', NoOfEmployeeID, NoOfEmployeeType FROM NoOfEmployees
      UNION ALL
      SELECT 'Department', DepartmentID, DepartmentName FROM Departments;
    `);
    
    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching lists:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
