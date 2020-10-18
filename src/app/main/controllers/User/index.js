const { User } = require('../../models')
const ErrorHandler = require('../../../core/errorHanlder')
// const Params = require('../../core/params')

class UserController {
  async create(req, res) {
    try {
      const createdUser = await User.create(req.body)
      res.status(201).json(createdUser)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async findOne(req, res) {
    try {
      const user = await User.findByPk(req.params.id)
      if (!user) {
        return res.status(404)
      }
      return res.status(200).json(user)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new UserController()
