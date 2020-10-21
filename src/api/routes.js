const express = require('express')
const {
  UserController,
  AccountController,
  EventController,
  ReservationController,
} = require('../app/main/controllers')

const routes = express.Router()

// Users
routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.findOne);

// Accounts
routes.post('/accounts', AccountController.create);
routes.get('/accounts/:id', AccountController.findOne);

// Events
routes.post('/events', EventController.create);
routes.get('/events/:id', EventController.findOne);

// Reservations
routes.post('/reservations', ReservationController.create);
routes.get('/reservations/:id', ReservationController.findOne);

module.exports = routes
