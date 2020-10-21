const { Model, DataTypes } = require('sequelize')

class Reservation extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      approved_at: {
        type: DataTypes.DATE,
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
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.belongsTo(models.Event, { foreignKey: 'event_id', as: 'event' })
    this.belongsTo(models.User, { foreignKey: 'approved_by', as: 'approvedBy' })
  }
}

module.exports = Reservation
