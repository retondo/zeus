const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')
const path = require('path')

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'typedefs.js'))
const typeDefs = mergeTypeDefs(typesArray)

const resolversArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolvers = mergeResolvers(resolversArray)

module.exports = {
  typeDefs,
  resolvers
}
