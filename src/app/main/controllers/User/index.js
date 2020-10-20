const { User } = require('../../models')
const ErrorHandler = require('../../../core/errorHanlder')
// const Params = require('../../core/params')

class UserController {
  async create(req, res) {
    try {
      let createdUser = await User.create(req.body)
      createdUser = createdUser.toJSON()
      delete createdUser.password
      res.status(201).send(createdUser)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async findOne(req, res) {
    try {
      let user = await User.findByPk(req.params.id)
      if (!user) { return res.status(404) }

      user = user.toJSON()
      delete user.password
      return res.status(200).send(user)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new UserController()
