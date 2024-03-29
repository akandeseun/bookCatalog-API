'use strict'
const { Model } = require('sequelize')
const likesMigrations = require('./columns/likesMigrations')
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(likesMigrations, {
    sequelize,
    modelName: 'Like'
  })
  return Like
}
