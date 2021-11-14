const express = require('express');
const router = express.Router();
const destinationCtrl = require('../controllers/destination');

router.get('/', destinationCtrl.getAllDestination);
router.post('/', destinationCtrl.createdestination);
router.get('/:id', destinationCtrl.getOnedestination);
router.put('/:id', destinationCtrl.modifydestination);
router.delete('/:id', destinationCtrl.deletedestination);

module.exports = router;