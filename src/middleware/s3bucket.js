const multer = require("multer");
const AWS = require("aws-sdk");
const MulterS3 = require("multer-s3");
const path = require("path");
const S3 = new AWS.s3();

var storage = MulterS3({
  acl: "public-read",
  S3,
  bucket: "image",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: "product-image" });
  },
  key: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
  }
};

module.exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10 MB
  },
  fileFilter: fileFilter,
}).fields([
  { name: "files", maxCount: 1 },
]);
