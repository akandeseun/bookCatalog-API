'use strict'
const { Model } = require('sequelize')
const adminMigrations = require('./columns/adminMigrations')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(adminMigrations, {
    sequelize,
    modelName: 'Admin'
  })
  return Admin
}
