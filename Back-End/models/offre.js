const mongoose = require('mongoose');


const offreSchema = mongoose.Schema({
    days: { type: Number, required: true },
    rooms: { type: Number, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    desc: { type: String, required: true },
    destination: { type: String, required: true },
    hotel: { type: String, required: true },
    price: { type: Number, required: true },
    promo: { type: Number, required: true },
    images: [String],
});


module.exports = mongoose.model('Offre', offreSchema);