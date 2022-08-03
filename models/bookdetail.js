const { Model } = require('sequelize')
const booksDetailsMigration = require('./columns/bookDetailsMigration')

module.exports = (sequelize, DataTypes) => {
  class BookDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookDetail.init(booksDetailsMigration, {
    sequelize,
    modelName: 'BookDetail'
  })
  return BookDetail
}
