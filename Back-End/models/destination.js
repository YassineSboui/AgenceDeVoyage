const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const destinationSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    abbreviation: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    longitude: { type: Number, required: true, unique: true },
    latitude: { type: Number, required: true, unique: true },
});

destinationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Destination', destinationSchema);