const express = require('express');
const multer = require('multer');
const routerGalleries = express.Router();
// Set up multer for file uploads
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
