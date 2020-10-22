const express = require('express');
const {
  AccountController,
  AuthenticationController
} = require('../../app/main/controllers')

const authenticatedRoutes = express.Router()

// Authentication
authenticatedRoutes.post('/register', AuthenticationController.register);
authenticatedRoutes.post('/authenticate', AuthenticationController.authenticate);

// Accounts
authenticatedRoutes.post('/accounts', AccountController.create);
authenticatedRoutes.get('/accounts', AccountController.findAll);
authenticatedRoutes.get('/accounts/:id', AccountController.findOne);

module.exports = authenticatedRoutes
