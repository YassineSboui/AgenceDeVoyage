const express = require('express');
const router = express.Router();
const offreCtrl = require('../controllers/offre');

router.get('/', offreCtrl.getAllOffre);
router.post('/', offreCtrl.createoffre);
router.get('/:id', offreCtrl.getOneoffre);
router.put('/:id', offreCtrl.modifyoffre);
router.delete('/:id', offreCtrl.deleteoffre);

module.exports = router;