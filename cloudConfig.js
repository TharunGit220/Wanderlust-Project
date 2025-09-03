const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
const multer = require('multer');
require("dotenv").config()
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'wanderlust_DEV',
      allowed_formats: ['jpg', 'png', 'jpeg'],
      
    };
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, storage, upload };
