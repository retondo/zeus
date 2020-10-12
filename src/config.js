const config = {
  app: {
    name: 'Zeus',
    description: 'Zeus is the sky and thunder god, who rules as king of the gods of Mount Olympus.',
    version: '0.0.0'
  },
  isProduction: () => {
    return process.env.NODE_ENV === 'prod'
  }
}

module.exports = config