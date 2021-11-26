const express = require('express');
const router = express.Router();
const hotelsCtrl = require('../controllers/hotels');

router.get('/', hotelsCtrl.getAllHotels);
router.post('/', hotelsCtrl.createhotels);
router.get('/:id', hotelsCtrl.getOnehotels);
router.put('/:id', hotelsCtrl.modifyhotels);
router.delete('/:id', hotelsCtrl.deletehotels);

module.exports = router;