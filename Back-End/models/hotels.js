const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const hotelsSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    nightprice: { type: Number, required: true },
    promotion: { type: Number, min: 0, max: 90, required: true },
    city: { type: String, required: true }
});

hotelsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Hotels', hotelsSchema);