'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Appointment, {
        as: 'appointment2',
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        min: 8
      }
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('Customer', 'Admin')
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};