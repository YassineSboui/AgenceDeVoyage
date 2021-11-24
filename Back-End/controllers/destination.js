const Destination = require('../models/destination');

exports.createdestination = (req, res, next) => {
    const destination = new Destination({ ...req.body });
    destination.save()
        .then(() => res.status(201).json({ destination }))
        .catch(error => res.status(400).json({ error }));
};
exports.getOnedestination = (req, res, next) => {
    Destination.findOne({
        name: req.params.id
    }).then(
        (destination) => {
            res.status(200).json(destination);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.modifydestination = (req, res, next) => {
    Destination.updateOne({ name: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deletedestination = (req, res, next) => {
    Destination.deleteOne({ name: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getAllDestination = (req, res, next) => {
    Destination.find().then(
        (destinations) => {
            res.status(200).json(destinations);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};