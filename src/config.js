const config = {
  app: {
    name: 'Zeus',
    description: 'Zeus is the sky and thunder god, who rules as king of the gods of Mount Olympus.',
    version: '0.0.0'
  },
  secrets: {
    authentication: 'fecc48356b23e82d5dcb6a5bc238cab9188cd096'
  },
  isProduction: () => {
    return process.env.NODE_ENV === 'production'
  }
}

module.exports = config
