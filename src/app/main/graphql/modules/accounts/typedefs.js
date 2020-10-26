const { gql } = require('apollo-server')

module.exports = gql`
  type AccountResponse {
    id: ID!,
    name: String!,
    updatedAt: String,
    createdAt: String
  }

  type Query {
    findAccount(id: ID!): AccountResponse!,
    findAccounts: [AccountResponse!]!
  }

  type Mutation {
    createAccount(name: String!): AccountResponse!,
    updateAccount(id: ID!, name: String!): AccountResponse!
  }
`
