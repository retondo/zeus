const sequelize = require('sequelize')

class ErrorHandler {
  static responseWithError(res, err) {
    if (
      err.name === 'SequelizeUniqueConstraintError' ||
      err.name === 'SequelizeValidationError'
    ) {
      let errors = []
      if (err.errors) {
        errors = err.errors.map(err => new Object({
          code: err.type,
          message: err.message,
          property: err.path
        }))
      }
      return res.status(422).send({ errors })
    }

    return res.status(400).send({
      errors: [{
        code: 'Unknow',
        message: err.toString()
      }]
    })
  }
}

module.exports = ErrorHandler
