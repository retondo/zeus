const express = require('express')
const {
  UserController,
  AccountController
} = require('../app/main/controllers')

const routes = express.Router()

// Users
routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.findOne);

// Accounts
routes.post('/accounts', AccountController.create);
routes.get('/accounts/:id', AccountController.findOne);

module.exports = routes
