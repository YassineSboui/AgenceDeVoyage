const mongoose = require('mongoose');


const mailSchema = mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: true },
});


module.exports = mongoose.model('Mail', mailSchema);