const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const routerGalleries = express.Router();

const {
  getProducts,
  getFindBySlug,
  GetFindById,
  deleteProducts,
  updateProducts,
  creating,
} = require('../controllers/galleriesController');

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
    folder: 'uploads_galleries', // Folder in Cloudinary where files will be stored
    format: async (req, file) => 'jpg', // Convert all files to JPG format
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique file name
  },
});

const upload = multer({ storage });
// Set up multer for file uploads

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
