const { Event } = require('../../models')
const ErrorHandler = require('../../../core/errorHanlder')
// const Params = require('../../core/params')

class EventController {
  async create(req, res) {
    try {
      const createdEvent = await Event.create(req.body)
      res.status(201).json(createdEvent)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async findOne(req, res) {
    try {
      const event = await Event.findByPk(req.params.id)
      if (!event) {
        return res.status(404)
      }
      return res.status(200).json(event)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new EventController()
