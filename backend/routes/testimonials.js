const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

// Import your controllers
const {
  getTestimonials,
  creatingTestimonial,
  deletingTestimonial,
  updatingTestimonial,
} = require('../controllers/testimonialsController');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Add this to your .env
  api_key: process.env.CLOUDINARY_API_KEY, // Add this to your .env
  api_secret: process.env.CLOUDINARY_API_SECRET, // Add this to your .env
});

// Set up Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'testimonials', // Folder in Cloudinary where files will be stored
    format: async (req, file) => 'jpg', // Convert all files to JPG format
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique file name
  },
});

const upload = multer({ storage });

// Routes
router.get('/', getTestimonials);
router.post('/', upload.single('image'), creatingTestimonial);
router.put('/:id', updatingTestimonial);
router.delete('/:id', deletingTestimonial);

module.exports = router;
