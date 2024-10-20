const multer = require("multer");
const path = require("path");
const uploadDir = path.join(__dirname, "upload_files");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

module.exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 15, 
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 
      "application/vnd.ms-excel", 
      "application/pdf",
      "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/csv"
    ];
if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type!'), false);
    }
  }
});
