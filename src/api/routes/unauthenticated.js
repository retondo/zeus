const express = require('express');
const {
  AccountController,
  AuthenticationController
} = require('../../app/main/controllers')

const unauthenticatedRoutes = express.Router()

// Authentication
unauthenticatedRoutes.post('/register', AuthenticationController.register);
unauthenticatedRoutes.post('/authenticate', AuthenticationController.authenticate);

// Accounts
unauthenticatedRoutes.post('/accounts', AccountController.create);
unauthenticatedRoutes.get('/accounts', AccountController.findAll);
unauthenticatedRoutes.get('/accounts/:id', AccountController.findOne);

module.exports = unauthenticatedRoutes
