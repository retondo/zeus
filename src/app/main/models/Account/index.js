const { Model, DataTypes } = require('sequelize')

class Account extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 150],
            msg: 'Should be greater than equal to 2 and lower than equal to 150'
          }
        }
      }
    }, {
      sequelize
    })
  }
}

module.exports = Account
