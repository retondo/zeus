const User = require('../../../models/User/')
const Account = require('../../../models/Account/')
const { ApolloError } = require('apollo-server')

module.exports = {
  UserResponse: {
    name: async (user) => {
      try {
        const account = await Account.findByPk(user.account_id, { attributes: ['name'] })
        if (!account) {
          return user.name
        }
        return `${account.name} - ${user.name}`
      } catch (err) {
        return user.name
      }
    }
  },
  Query: {
    findUsers: async () => await User.findAll({ attributes: { exclude: ['password'] } }),
    findUser: async (_, { id }) => {
      let user = await User.findByPk(id, { attributes: { exclude: ['password'] } })
      if (!user) {
        throw new ApolloError('User not found')
      }
      let account = await Account.findByPk(user.account_id)
      if (!account) {
        throw new ApolloError('Account not found')
      }
      user.account = account
      return user
    },
  },
  Mutation: {
    createUser: async (_, { data }) => {
      let user = await User.create(data)
      user = user.toJSON()
      delete user.password
      return user
    }
  }
}
