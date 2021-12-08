const Offre = require('../models/offre');

exports.createoffre = (req, res, next) => {
    const offre = new Offre({ ...req.body });
    offre.save()
        .then(() => res.status(201).json({ offre }))
        .catch(error => res.status(400).json({ error }));
};
exports.getOneoffre = (req, res, next) => {
    Offre.findOne({
        _id: req.params.id
    }).then(
        (offre) => {
            res.status(200).json(offre);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.modifyoffre = (req, res, next) => {
    Offre.updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteoffre = (req, res, next) => {
    Offre.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getAllOffre = (req, res, next) => {
    Offre.find().then(
        (offres) => {
            res.status(200).json(offres);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};