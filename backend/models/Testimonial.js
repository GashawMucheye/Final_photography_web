const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  imageUrl: { type: String }, // Store the image URL or path
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
