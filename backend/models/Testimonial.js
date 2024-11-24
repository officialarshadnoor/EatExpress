const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    testimonial: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
