const Account = require('../../../models/Account/')
const { ApolloError } = require('apollo-server')

module.exports = {
  Query: {
    findAccounts: async () => await Account.findAll(),
    findAccount: async (_, { id }) => await Account.findByPk(id)
  },
  Mutation: {
    createAccount: async (_, { data }) => await Account.create(data),
    updateAccount: async (_, { id, name }) => {
      try {
        let account = await Account.findByPk(id)
        if (!account) {
          throw new ApolloError('Account not found')
        }
        const updatedAccount = await account.update({ name }, { returning: true })
        if (!updatedAccount) {
          throw new ApolloError('Account not updated')
        }
        return updatedAccount
      } catch (err) {
        return err
      }
    }
  }
}
