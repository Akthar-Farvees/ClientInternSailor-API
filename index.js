import DotEnv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import moment from 'moment-timezone';
import sql from 'mssql'; // Import the mssql package

DotEnv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const JobStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/posterImage')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const JobUpload = multer({
    storage: JobStorage
});

const upload = multer({
    storage: storage
});


// Configure your SQL Server connection
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,  // SQL Server host
    database: process.env.DB_NAME, // Database name
    options: {encrypt: true, trustServerCertificate: true, }
};

// Database connectivity check and connection
sql.connect(config)
    .then(pool => {
        console.log('Connected to SQL Server');
        // You can now query the database
    })
    .catch(err => {
        console.error('Error connecting to SQL Server:', err);
    });

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

// ---------------------------------------------
// Route to get job and company details
app.get("/company", (req, res) => {
    const query = `
    SELECT
        job.id AS jobId,
        job.name AS jobName,
        job.position,
        job.postedDate,
        job.description AS jobDescription,
        job.requirements AS jobRequirements,
        job.image AS jobImage,
        job.type AS jobType,
        company.id AS companyId,
        company.name AS companyName,
        company.description AS companyDescription,
        CONVERT(VARCHAR(MAX), company.logo, 1) AS companyLogo,
        company.location
    FROM
        job
    JOIN
        company ON job.companyId = company.id
    ORDER BY
        job.postedDate DESC`;

    sql.query(query)
        .then(result => {
            res.json(result.recordset);
        })
        .catch(err => {
            console.error('Error fetching company data:', err);
            res.json({ error: err.message });
        });
});


// -------------------------------------------

app.get("/companyTable", (req, res) => {
    const query = `
    SELECT 
        name AS companyName,
        id AS companyId
    FROM
        company`;

    sql.query(query)
        .then(result => {
            res.json(result.recordset);
        })
        .catch(err => {
            console.error('Error fetching company data:', err);
            res.json({ error: err.message });
        });
});

// Company Registration
app.post('/company', upload.single('image'), (req, res) => {
    const { compName, compDesc, compLoc } = req.body;
    const image = req.file ? req.file.filename : null;

    const query = 'INSERT INTO company (name, description, logo, location) VALUES (@compName, @compDesc, @image, @compLoc)';
    const request = new sql.Request();
    request.input('compName', sql.NVarChar, compName);
    request.input('compDesc', sql.NVarChar, compDesc);
    request.input('image', sql.NVarChar, image);
    request.input('compLoc', sql.NVarChar, compLoc); 

    request.query(query)
        .then(result => {
            res.json('Company has been created!');
        })
        .catch(err => {
            console.error('Error creating company:', err);
            res.json({ error: err.message });
        });
});

// Job Registration
app.post('/job', JobUpload.single('poster'), (req, res) => {
    const {
        jobName,
        position,
        description,
        requirements,
        type,
        companyId
    } = req.body;

    const image = req.file ? req.file.filename : null;
    const currentDate = moment.tz('Asia/Colombo').format('YYYY-MM-DD HH:mm:ss');

    const query = 'INSERT INTO job (name, position, postedDate, description, requirements, image, type, companyId) VALUES (@jobName, @position, @currentDate, @description, @requirements, @image, @type, @companyId)';
    const request = new sql.Request();
    request.input('jobName', sql.NVarChar, jobName);
    request.input('position', sql.NVarChar, position);
    request.input('currentDate', sql.DateTime, currentDate);
    request.input('description', sql.NVarChar, description);
    request.input('requirements', sql.NVarChar, requirements);
    request.input('image', sql.NVarChar, image);
    request.input('type', sql.NVarChar, type);

    // Directly pass the companyId as a GUID using sql.UniqueIdentifier
    request.input('companyId', sql.UniqueIdentifier, companyId);

    request.query(query)
        .then(result => {
            res.json('Job created successfully');
        })
        .catch(err => { 
            console.error('Error creating job:', err);
            res.status(500).json({ error: 'Error creating job', details: err.message });
        });
});


// Start the server
app.listen(8800, () => {
    console.log("Connected to backend");
});
