const express = require('express');
const router = express.Router();
const mailCtrl = require('../controllers/mail');


router.post('/', mailCtrl.sendmail);

module.exports = router;