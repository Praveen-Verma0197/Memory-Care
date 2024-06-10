const express = require('express')
const router = express.Router()

const { notifyPatient } = require('../controller/notifyEmailController');

router.post('/notify', notifyPatient);

module.exports = router