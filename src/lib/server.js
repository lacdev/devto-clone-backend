const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan('combined'))

const post = require('../routers/post.router')

server.use('/posts', post)

module.exports = server
