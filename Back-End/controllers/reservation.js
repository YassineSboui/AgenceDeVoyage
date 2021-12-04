const Reservation = require('../models/reservation');

exports.createreservation = (req, res, next) => {
    const reservation = new Reservation({ ...req.body });
    reservation.save()
        .then(() => res.status(201).json({ reservation }))
        .catch(error => res.status(400).json({ error }));
};
exports.getOnereservation = (req, res, next) => {
    Reservation.findOne({
        _id: req.params.id
    }).then(
        (reservation) => {
            res.status(200).json(reservation);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.modifyreservation = (req, res, next) => {
    Reservation.updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deletereservation = (req, res, next) => {
    Reservation.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getAllReservation = (req, res, next) => {
    Reservation.find().then(
        (reservations) => {
            res.status(200).json(reservations);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};