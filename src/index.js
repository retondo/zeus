const server = require('./api/server')

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log('\u{1F3C3} API running at port 3000')
})
