const express = require('express')

const controller = require('../controllers/post.controller')

const router = express.Router()

router.get('/', controller.getPost)
//router.get('/posts/_id:id', controller.getPostId)

module.exports = router
