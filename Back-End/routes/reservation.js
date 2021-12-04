const express = require('express');
const router = express.Router();
const reservationCtrl = require('../controllers/reservation');

router.get('/', reservationCtrl.getAllReservation);
router.post('/', reservationCtrl.createreservation);
router.get('/:id', reservationCtrl.getOnereservation);
router.put('/:id', reservationCtrl.modifyreservation);
router.delete('/:id', reservationCtrl.deletereservation);

module.exports = router;