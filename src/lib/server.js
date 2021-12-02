const express = require('express')
const post = require('../routers/post.router')
const logger = require('../middlewares/logger')
const cors = require('cors')
const morgan = require('morgan')

const server = express()
server.use(cors())
server.use(express.json())
server.use(logger)
server.use(morgan('combined'))

server.use('/posts', post)
module.exports = server
