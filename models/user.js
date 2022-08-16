const { Model } = require('sequelize')
const usersMigration = require('./columns/usersMigration')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(usersMigration, {
    sequelize,
    modelName: 'User'
  })
  return User
}
