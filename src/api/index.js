const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const auth = require('../authentication/auth')
const authenticatedRoutes = require('./routes/authenticated')
const unauthenticatedRoutes = require('./routes/unauthenticated')

require('dotenv').config()
require('../app/main/database')

const api = express()

api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())

api.get('/', function (req, res) {
  res.json(config.app)
})

api.use(unauthenticatedRoutes)

// Authenticated routes
api.use(auth.authenticationRequired)
api.use(authenticatedRoutes)

api.on('NotFound', (req, res, err) =>
  res.status(404).send({ code: 'ResourceNotFound' })
)

module.exports = api
