const express = require('express');
const router = express.Router();
const roleCtrl = require('../controllers/role');

router.get('/', roleCtrl.getAllRole);
router.post('/', roleCtrl.createrole);
router.get('/:id', roleCtrl.getOnerole);
router.put('/:id', roleCtrl.modifyrole);
router.delete('/:id', roleCtrl.deleterole);

module.exports = router;