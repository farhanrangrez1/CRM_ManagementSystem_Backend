// middlewares/upload.js
const multer = require('multer');

const storage = multer.memoryStorage(); // in-memory for Cloudinary
const upload = multer({ storage });

module.exports = upload;
