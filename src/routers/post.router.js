const express = require('express')

const controller = require('../controllers/post.controller')

const router = express.Router()

router.get('/', controller.getPost)
router.get('/:id', controller.getPostId)
router.put('/:id', controller.putPost)
module.exports = router
