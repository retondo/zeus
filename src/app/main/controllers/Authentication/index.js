const { User } = require('../../models/')
const ErrorHandler = require('../../../core/errorHanlder')
const authentication = require('../../../../authentication/')

class AuthenticationController {
  async register(req, res) {
    try {
      const { cpf } = req.body;
      const userExists = await User.findOne({ where: { cpf } });

      if (userExists) {
        return res.status(400).send({
          code: 'ResourceNotFound',
          message: 'User already exists'
        })
      }

      let createdUser = await User.create(req.body)
      createdUser = createdUser.toJSON()
      delete createdUser.password

      createdUser.token = authentication.generateToken(createdUser)

      return res.status(201).send(createdUser)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async authenticate(req, res) {
    try {
      const { username, password } = req.body
      let user = await User.findOne({ where: { cpf: username } });

      if (!user) {
        return res.status(401).send({
          code: 'InvalidCredentials',
          message: 'Invalid username or password'
        })
      }

      const isCorrectPassword = authentication.comparePassword(password, user.password)
      if (!isCorrectPassword) {
        return res.status(401).send({
          code: 'InvalidCredentials',
          message: 'Invalid username or password'
        })
      }

      user = user.toJSON()
      delete user.password
      user.token = authentication.generateToken(user)

      return res.status(200).send(user)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new AuthenticationController()
