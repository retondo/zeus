const { Reservation } = require('../../models')
const ErrorHandler = require('../../../core/errorHanlder')
// const Params = require('../../core/params')

class ReservationController {
  async create(req, res) {
    try {
      const createdReservation = await Reservation.create(req.body)
      res.status(201).json(createdReservation)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async findOne(req, res) {
    try {
      const reservation = await Reservation.findByPk(req.params.id)
      if (!reservation) {
        return res.status(404)
      }
      return res.status(200).json(reservation)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new ReservationController()
