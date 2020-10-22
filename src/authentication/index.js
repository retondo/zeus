const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config')

module.exports = {
  comparePassword: (password, encryptedPassword) => {
    return bcrypt.compareSync(password, encryptedPassword)
  },

  generateToken: (user) => {
    return jwt.sign(user, config.secrets.authentication, {
      expiresIn: '1d'
    })
  },

  validateToken: (token) => {
    return jwt.verify(token, config.secrets.authentication)
  }
}
