const expressAsyncHandler = require('express-async-handler');
const Testimonial = require('../models/Testimonial');

//! @desc  get testimonials
//! @route get/api/testimonials
const getTestimonials = expressAsyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

//! @desc  post testimonials
//! @route post/api/testimonials
const creatingTestimonial = expressAsyncHandler(async (req, res) => {
  const { name, content, rating } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  const newTestimonial = new Testimonial({ name, content, rating, imageUrl });
  await newTestimonial.save();
  res.status(201).json(newTestimonial);
});

module.exports = {
  getTestimonials,
  creatingTestimonial,
};
