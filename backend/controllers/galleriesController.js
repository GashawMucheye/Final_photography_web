const Images = require('../models/gallery');
const expressAsyncHandler = require('express-async-handler');
//! @desc  get products
//! @route get/api/products
const getProducts = expressAsyncHandler(async (req, res) => {
  // const products = await Images.find();
  // res.send(products);
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 6; // Default to 10 items per page
  const skip = (page - 1) * limit;

  // Query the database with limit and skip
  const products = await Images.find().skip(skip).limit(limit);
  const totalProducts = await Images.countDocuments();

  res.json({
    products,
    totalPages: Math.ceil(totalProducts / limit),
    currentPage: page,
  });
});

//! @desc  get product
//! @route get/api/product/:slug
const getFindBySlug = expressAsyncHandler(async (req, res) => {
  const product = await Images.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Images Not Found' });
  }
});
//! @desc  get product
//! @route get/api/product/:id
const GetFindById = expressAsyncHandler(async (req, res) => {
  const product = await Images.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Images Not Found' });
  }
});

//! @desc  post products
//! @route post/api/product

const creating = expressAsyncHandler(async (req, res) => {
  const { name, slug, category, description } = req.body;
  const image = req.file ? req.file.path : '';

  const product = new Images({ name, slug, image, category, description });
  await product.save();
  res.status(201).json(product);
});

//! @desc  delete products
//! @route delete/api/product
const deleteProducts = expressAsyncHandler(async (req, res) => {
  const product = await Images.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Testimonial not found');
  }
  // Delete the gallery_product
  await product.deleteOne();
  res.send({ message: 'Images Deleted' });
});

//! @desc  update products
//! @route PUT/api/products
//!@access private

const updateProducts = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, slug, category, description } = req.body;
  const image = req.file ? req.file.path : '';
  // Find the gallery_item by id
  const product = await Images.findById(id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  // Update the gallery_item fields
  product.name = name || product.name;
  product.slug = slug || product.slug;
  product.image = image || product.image;
  product.category = category || product.category;
  product.description = description || product.description;
  await product.save();
  res.send({ message: 'Images Updated' });
});

module.exports = {
  getProducts,
  getFindBySlug,
  GetFindById,
  deleteProducts,
  updateProducts,
  creating,
};
