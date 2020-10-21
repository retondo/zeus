const { Model, DataTypes } = require('sequelize')

class Event extends Model {
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
            args: [2, 100],
            msg: 'Should be greater than equal to 2 and lower than equal to 100'
          }
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [2, 300],
            msg: 'Should be greater than equal to 2 and lower than equal to 300'
          }
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: {
            args: [true],
            msg: 'Should be a valid date',
          }
        }
      }
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account' })
  }
}

module.exports = Event
