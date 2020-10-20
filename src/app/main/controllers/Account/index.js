const { Account } = require('../../models')
const ErrorHandler = require('../../../core/errorHanlder')
// const Params = require('../../core/params')

class AccountController {
  async create(req, res) {
    try {
      const createdAccount = await Account.create(req.body)
      res.status(201).json(createdAccount)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }

  async findOne(req, res) {
    try {
      const account = await Account.findByPk(req.params.id)
      if (!account) {
        return res.status(404)
      }
      return res.status(200).json(account)
    } catch (err) {
      ErrorHandler.responseWithError(res, err)
    }
  }
}

module.exports = new AccountController()
