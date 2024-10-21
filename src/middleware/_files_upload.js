const multer = require("multer");
const path = require("path");
const fs = require('fs');
// Ensure the upload directory exists
const uploadDir = path.join(__dirname, "upload_files");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
} else {
}
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
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
        cb(null, true); // File type allowed
    } else {
        cb(new Error(`Unsupported file type: ${file.mimetype}`), false); // File type not allowed
    }
}

module.exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 15, // 10 MB
    },
    fileFilter: fileFilter
}).fields(
    [{ name: 'modelFrontShot', maxCount: 1 },
    { name: 'modelRightSideShot', maxCount: 1 },
    { name: 'modelLeftSideShot', maxCount: 1 },
    { name: 'modelBackSideShot', maxCount: 1 },
    { name: 'modelAngle45Shot', maxCount: 1 }]
);
