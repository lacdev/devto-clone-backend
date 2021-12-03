// router define los endpoints y se realiza 

const express = require('express')

const controller = require('../controllers/koder.controller')

const router = express.Router()

router.get('/', controller.getKoder)
router.post('/', controller.savedKoder)
router.delete('/:id', controller.deletedKoder)


module.exports = router
