const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const hotelsSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    Rating: { type: Number,min: 0, max: 5,required: true },
    Nightprice: { type: Number, required: true },
    Promotion : { type: Number, min: 5, max: 90, required: true },
    city: { type: String, ref: "Destination" }
});

hotelsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Hotels', hotelsSchema);