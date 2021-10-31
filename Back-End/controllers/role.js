const Role = require('../models/role');
const User = require('../models/user');

exports.createrole = (req, res, next) => {
    const role = new Role({ ...req.body });
    role.save()
        .then(() => res.status(201).json({ role }))
        .catch(error => res.status(400).json({ error }));
};
exports.getOnerole = (req, res, next) => {
    Role.findOne({
        _id: req.params.id
    }).then(
        (role) => {
            res.status(200).json(role);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.modifyrole = (req, res, next) => {
    Role.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleterole = async (req, res, next) => {
    const userRole = await User.find({ role: req.params.id });

    if (userRole) {
        res.status(400).json({ message: 'role non supprimé !' })
    } else {
        Role.findOne({ _id: req.params.id })
            .then(role => {
                role.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'role supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    }

};
exports.getAllRole = (req, res, next) => {
    Role.find().then(
        (roles) => {
            res.status(200).json(roles);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};