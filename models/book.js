const { Model } = require('sequelize')
const booksMigration = require('./columns/booksMigration')

module.exports = (sequelize, DataTypes) => {
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
  Book.init(booksMigration, {
    sequelize,
    modelName: 'Book'
  })
  return Book
}
