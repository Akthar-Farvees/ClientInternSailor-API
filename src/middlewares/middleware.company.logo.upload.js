import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define upload directory path - using assets/images since that's where files are being saved
const uploadDir = path.join(__dirname, '..', 'assets', 'images');


// Create directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created directory: ${uploadDir}`);
}

// Configure file storage for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = file.fieldname + "_" + Date.now() + path.extname(file.originalname);
    cb(null, filename);
    console.log(`File being uploaded to: ${path.join(uploadDir, filename)}`);
  },
});

// Export the middleware
const upload = multer({
  storage: storage,
});

export default upload;