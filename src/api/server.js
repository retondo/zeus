const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
require('dotenv').config()

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.get('/', function (req, res) {
  res.json(config.app)
})

// TODO: Verify authentication

module.exports = server
