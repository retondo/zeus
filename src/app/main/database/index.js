const { Sequelize } = require('sequelize')
const models = require('../models')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    underscored: true
  }
})

for (const model in models) {
  if (models.hasOwnProperty(model)) {
    models[model].init(sequelize)
  }
}

module.exports = sequelize
