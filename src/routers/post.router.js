const express = require('express')

const controller = require('../controllers/post.controller')

const router = express.Router()

router.get('/', controller.getPost)

module.exports = router
