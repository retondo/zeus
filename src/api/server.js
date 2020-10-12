const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.get('/', function (req, res) {
  res.json(config.app)
})

module.exports = server

// TODO: Verify authentication
