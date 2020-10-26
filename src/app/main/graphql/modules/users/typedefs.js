const { gql } = require('apollo-server')

module.exports = gql`
  type UserResponse {
    id: ID!,
    account: AccountResponse!,
    name: String!,
    email: String,
    cpf: String!,
    birthdate: String!,
    phone: String,
    createdAt: String,
    updatedAt: String
  }

  input UserInput {
    name: String!,
    account_id: ID!,
    email: String,
    cpf: String!,
    birthdate: String!,
    phone: String,
    password: String!
  }

  type Query {
    findUser(id: ID!): UserResponse!,
    findUsers: [UserResponse!]!
  }

  type Mutation {
    createUser(data: UserInput!): UserResponse!
  }
`
