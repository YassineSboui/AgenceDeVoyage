const mongoose = require('mongoose');


const reservationSchema = mongoose.Schema({
    city: { type: String, required: true },
    checkin: { type: Date, required: true },
    days: { type: Number, required: true },
    rooms: { type: Number, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    destination: { type: String, required: true },
    hotel: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
});


module.exports = mongoose.model('Reservation', reservationSchema);