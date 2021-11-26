const Hotels = require('../models/hotels');

exports.createhotels = (req, res, next) => {
    const hotels = new Hotels({ ...req.body });
    hotels.save()
        .then(() => res.status(201).json({ hotels }))
        .catch(error => res.status(400).json({ error }));
};
exports.getOnehotels = (req, res, next) => {
    Hotels.findOne({
        name: req.params.id
    }).then(
        (hotels) => {
            res.status(200).json(hotels);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.modifyhotels = (req, res, next) => {
    Hotels.updateOne({ name: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deletehotels = (req, res, next) => {
    Hotels.deleteOne({ name: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getAllHotels = (req, res, next) => {
    Hotels.find().then(
        (hotelss) => {
            res.status(200).json(hotelss);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};