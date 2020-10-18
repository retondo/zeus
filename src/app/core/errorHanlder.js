class ErrorHandler {
  static responseWithError(res, err) {
    if (
      err.name === 'SequelizeUniqueConstraintError' ||
      err.name === 'SequelizeValidationError'
    ) {
      return res.status(422).send({
        errors: err.errors
      })
    }

    return res.status(400).send()
  }
}

module.exports = ErrorHandler
