const authentication = require('./')

module.exports = {
  authenticationRequired: async (req, res, next) => {
    const token = req.headers.authorization || req.headers['Authorization']
    if (!token) {
      return res.status(401).send({ message: 'No token provided' })
    }

    const splitedToken = token.split(' ')
    if (splitedToken.length !== 2) {
      return res.status(401).send({ message: 'Invalid token' })
    }

    const [ scheme, tokenHash ] = splitedToken
    if (!/^Bearer$/.test(scheme)) {
      return res.status(401).send({ message: 'Invalid token' })
    }

    try {
      const user = authentication.validateToken(tokenHash)
      req.authenticatedUser = user
      return next()
    } catch (err) {
      return res.status(401).send({ message: 'Invalid token' })
    }
  }
}
