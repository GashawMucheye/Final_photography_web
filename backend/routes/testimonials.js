const express = require('express');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
const {
  getTestimonials,
  creatingTestimonial,
} = require('../controllers/testimonialsController');
// Set up multer for file uploads

// Get all testimonials
router.get('/', getTestimonials);

// Add a new testimonial
router.post('/', upload.single('image'), creatingTestimonial);

module.exports = router;
