const { Model } = require('sequelize')
const createBookObj = require('./columns/20220803054005-create-book')
module.exports = (sequelize, DataTypes, Sequelize) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(createBookObj, {
    sequelize,
    modelName: 'Book'
  })
  return Book
}
