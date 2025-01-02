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
//! @desc  update testimonial
//! @route PUT /api/testimonials/:id
const updatingTestimonial = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, content, rating } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  // Find the testimonial by id
  const testimonial = await Testimonial.findById(id);

  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }

  // Update the testimonial fields
  testimonial.name = name || testimonial.name;
  testimonial.content = content || testimonial.content;
  testimonial.rating = rating || testimonial.rating;
  testimonial.imageUrl = imageUrl || testimonial.imageUrl;

  // Save the updated testimonial
  const updatedTestimonial = await testimonial.save();
  res.status(200).json(updatedTestimonial);
});
//! @desc  delete testimonial
//! @route DELETE /api/testimonials/:id
const deletingTestimonial = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  // Find the testimonial by id
  const testimonial = await Testimonial.findById(id);

  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }

  // Delete the testimonial
  await testimonial.remove();

  res.status(200).json({ message: 'Testimonial removed successfully' });
});

module.exports = {
  getTestimonials,
  creatingTestimonial,
  updatingTestimonial,
  deletingTestimonial,
};
