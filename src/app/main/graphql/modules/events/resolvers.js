const Event = require('../../../models/Event/')

module.exports = {
  Query: {
    findEvents: async () => await Event.findAll(),
    findEvent: async (_, { id }) => await Event.findByPk(id),
  },
  Mutation: {
    createEvent: async (_, { data }) => await Event.create(data)
  }
}
