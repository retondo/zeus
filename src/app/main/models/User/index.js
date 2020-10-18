const { Model, DataTypes } = require('sequelize')
const cpf = require('@fnando/cpf/commonjs')

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 50],
            msg: 'Should be greater than equal to 2 and lower than equal to 50'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: [true],
          msg: 'Email address already exists'
        },
        validate: {
          isEmail: true
        }
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: [true],
          msg: 'Should be an unique CPF number'
        },
        validate: {
          isCPF(value) {
            if (!cpf.isValid(value)) {
              throw new Error('Should be a valid CPF number')
            }
          }
        }
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            args: [true],
            msg: 'Should be a valid date only',
          }
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: {
            args: [/[1-9]{2}9[8-9]\d{7}/],
            msg: 'Should be a valid phone number'
          }
        }
      },
      member: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      sequelize
    })
  }
}

module.exports = User
