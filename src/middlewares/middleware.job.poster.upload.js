// middleware.company.logo.upload.js
import multer from 'multer';

// Use memory storage for buffer access (required for Cloudinary stream upload)
const storage = multer.memoryStorage();

// Create the multer instance
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // optional: 5MB limit
  },
});

export default upload;


// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import { fileURLToPath } from 'url';


// // Get current file directory
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define upload directory path
// const uploadDir = path.join(__dirname, '..', 'assets', 'posterImage');

// // Create directory if it doesn't exist
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
//   console.log(`Created directory: ${uploadDir}`);
// }

// // Configure file storage for uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//   },
// });

// export default multer({
//     storage: storage,
//   });