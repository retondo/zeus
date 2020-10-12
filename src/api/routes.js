const express = require('express')
const { UserController } = require('../controllers/')

const routes = express.Router()

routes.post('/users', UserController.create);

module.exports = routes
