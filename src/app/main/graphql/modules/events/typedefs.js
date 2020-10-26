const { gql } = require('apollo-server')

module.exports = gql`
  type EventResponse {
    id: ID!,
    account_id: ID!,
    name: String!,
    description: String,
    active: Boolean,
    date: String!,
    updatedAt: String,
    createdAt: String
  }

  input EventInput {
    account_id: ID!,
    name: String!,
    description: String,
    active: Boolean = true,
    date: String!
  }

  type Query {
    findEvent(id: ID!): EventResponse!,
    findEvents: [EventResponse!]!
  }

  type Mutation {
    createEvent(data: EventInput!): EventResponse!
  }
`
