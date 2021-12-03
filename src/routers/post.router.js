const express = require('express')

const controller = require('../controllers/post.controller')

const router = express.Router()

router.get('/', controller.getPosts)
router.post('/', controller.savePost)
router.delete('/:id', controller.deletePost)
router.put('/:id')
router.get('/:id', controller.getSinglePost)

module.exports = router
