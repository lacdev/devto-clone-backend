const express = require('express')
const koder = require('../routers/koder.router')
const logger = require('../middlewares/logger')
const cors = require('cors')
const morgan = require('morgan')

const server = express()
server.use(cors())
server.use(express.json())
server.use(logger)
server.use(morgan('combined'))

// server.use('/koders', koder)
server.use('/koders', koder)
module.exports = server
