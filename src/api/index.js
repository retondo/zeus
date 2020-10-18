const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const routes = require('./routes')

require('dotenv').config()
require('../app/main/database')

const api = express()

api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())

api.get('/', function (req, res) {
  res.json(config.app)
})

// TODO: Verify authentication

api.use(routes)

module.exports = api
