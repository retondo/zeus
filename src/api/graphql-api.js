const { ApolloError } = require('apollo-server')
const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('../app/main/graphql/')

require('dotenv').config()
require('../app/main/database')

module.exports = new ApolloServer({ typeDefs, resolvers })
