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
  const { name, slug, category } = req.body;
  const image = req.file.path;

  const product = new Images({ name, slug, image, category });
  await product.save();
  res.status(201).json(product);
});

//! @desc  delete products
//! @route delete/api/product
const deleteProducts = expressAsyncHandler(async (req, res) => {
  const product = await Images.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.send({ message: 'Images Deleted' });
  } else {
    res.status(404).send({ message: 'Images Not Found' });
  }
});

//! @desc  update products
//! @route PUT/api/products
//!@access private

const updateProducts = expressAsyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Images.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.slug = req.body.slug;
    product.price = req.body.price;
    product.image = req.body.image;
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    await product.save();
    res.send({ message: 'Images Updated' });
  } else {
    res.status(404).send({ message: 'Images Not Found' });
  }
});

module.exports = {
  getProducts,
  getFindBySlug,
  GetFindById,
  deleteProducts,
  updateProducts,
  creating,
};
