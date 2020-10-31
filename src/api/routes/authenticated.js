const express = require('express')
const {
  UserController,
  EventController,
  AccountController,
  ReservationController,
} = require('../../app/main/controllers')

const authenticatedRoutes = express.Router()

// Accounts
authenticatedRoutes.put('/accounts/:id', AccountController.update);

// Users
authenticatedRoutes.get('/users', UserController.findAll);
authenticatedRoutes.get('/users/:id', UserController.findOne);
authenticatedRoutes.put('/users/:id', UserController.update);

// Events
authenticatedRoutes.post('/events', EventController.create);
authenticatedRoutes.get('/events/:id', EventController.findOne);

// Reservations
authenticatedRoutes.post('/reservations', ReservationController.create);
authenticatedRoutes.get('/reservations/:id', ReservationController.findOne);

module.exports = authenticatedRoutes
