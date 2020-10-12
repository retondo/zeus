const server = require('./api/server')

const port = process.env.PORT || 3000

server.listen(port, error => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`\u{1F3C3} API running at port ${port}`)
})
