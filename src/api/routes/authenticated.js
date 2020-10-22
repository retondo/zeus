const express = require('express')
const {
  UserController,
  EventController,
  ReservationController,
} = require('../../app/main/controllers')

const unauthenticatedRoutes = express.Router()

// Users
unauthenticatedRoutes.get('/users', UserController.findAll);
unauthenticatedRoutes.get('/users/:id', UserController.findOne);

// Events
unauthenticatedRoutes.post('/events', EventController.create);
unauthenticatedRoutes.get('/events/:id', EventController.findOne);

// Reservations
unauthenticatedRoutes.post('/reservations', ReservationController.create);
unauthenticatedRoutes.get('/reservations/:id', ReservationController.findOne);

module.exports = unauthenticatedRoutes
