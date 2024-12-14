const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const routerGalleries = express.Router();

// Cloudinary Configuration
// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
// Multer-Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage });
// Set up multer for file uploads

const {
  getProducts,
  getFindBySlug,
  GetFindById,
  deleteProducts,
  updateProducts,
  creating,
} = require('../controllers/galleriesController');

// CREATE a new gallery item
routerGalleries.post('/', upload.single('image'), creating);

// READ all gallery items or filter by category
routerGalleries.get('/', getProducts);

// READ one gallery item by ID
routerGalleries.get('/:id', GetFindById);
// READ one gallery item by slug
routerGalleries.get('/:id', getFindBySlug);

// UPDATE a gallery item by ID

routerGalleries.put('/:slug', updateProducts);

// DELETE a gallery item by ID
routerGalleries.delete('/:id', deleteProducts);

module.exports = routerGalleries;
