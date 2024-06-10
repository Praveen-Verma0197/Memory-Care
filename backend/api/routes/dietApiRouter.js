const express = require('express')
const router = express.Router()

const { addDiet, getTodayDiet } = require('../controller/dietController')

router.post('/add-diet', addDiet)
router.get('/get-diet', getTodayDiet)

module.exports = router