module.exports = {
  development: {
    dialect: 'postgres',
    database: 'zeus',
    host: 'localhost',
    username: 'postgres',
    password: 'test',
    define: {
      underscored: true
    }
  },
  production: {
    username: 'rgqjvwpbujcujh',
    password: 'ef62e266a794e8e2e956f4e54332db3064e5d5a8a946273ebbb1588fa2d26da3',
    database: 'd889oesel9ouhk',
    host: 'ec2-50-17-197-184.compute-1.amazonaws.com',
    dialect: 'postgres',
    defines: {
      underscored: true
    }
  }
}
