const { User } = require('../../models')
const ErrorHandler = require('../../../core/errorHanlder')
// const Params = require('../../core/params')

class UserController {
  async findOne(req, res) {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: {
          exclude: ['password']
        }
      })

      if (!user) { return res.status(404) }

      return res.status(200).json(user)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async findAll(req, res) {
    try {
      console.log('authenticatedUser: ', req.authenticatedUser)
      const users = await User.findAll({
        attributes: {
          exclude: ['password']
        }
      })

      return res.status(200).send({
        items: users
      })
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id)
      if (!user) {
        return res.status(404).send({
          errors: [{
            code: 'ResourceNotFound',
            message: 'User not found'
          }]
        })
      }
      const updatedUser = await user.update(req.body, { returning: true })
      return res.status(200).json(updatedUser)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new UserController()
