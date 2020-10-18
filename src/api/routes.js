const express = require('express')
const { UserController } = require('../app/main/controllers')

const routes = express.Router()

routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.findOne);

module.exports = routes
