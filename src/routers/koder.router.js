const express = require('express')

const controller = require('../controllers/koder.controller')

const router = express.Router()

router.get('/', controller.getKoder)

module.exports = router
