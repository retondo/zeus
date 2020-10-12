const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      phone: DataTypes.STRING,
      member: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User
