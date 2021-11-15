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

// {
//     "name": "New York",
//       "abbreviation": "NY",
//       "description": "La ville de New York comprend 5 arrondissements situés là où la rivière Hudson rencontre l'océan Atlantique. En son cœur se trouve Manhattan, un arrondissement densément peuplé qui compte parmi les principaux centres commerciaux, financiers et culturels du monde. Ses sites emblématiques comprennent des gratte-ciel tels que l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est mis en scène à Times Square, éclairé au néon.",
//       "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg/1920px-NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg",
//       "price": 100,
//       "longitude": -74.0060152,
//       "latitude": 40.7127281
// }