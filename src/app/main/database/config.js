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
    username: 'naycrcfwljhyar',
    password: 'f72a00c704fab7c8c96ed91e733f78e95e386513195f950d4c9464bb475f2abd',
    database: 'dcfv4rgs58rbr0',
    host: 'ec2-3-214-46-194.compute-1.amazonaws.com',
    dialect: 'postgres',
    define: {
      underscored: true
    }
  }
}
