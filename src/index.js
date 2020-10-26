// const api = require('./api/')
const graphQLServer = require('./api/graphql-api')

const port = process.env.PORT || 3000

// api.listen(port, error => {
//   if (error) {
//     console.error(error)
//     process.exit(1)
//   }
//   console.log(`\u{1F3C3} API running at port ${port}`)
// })

graphQLServer.listen(port)
  .then(({ url }) => console.log(`\u{1F3C3} API running at ${url}`))
  .catch((reason) => {
    if (reason) {
      console.error(error)
      process.exit(1)
    }
  })
