const { Model } = require('sequelize')
const categoriesMigration = require('./columns/categoriesMigration')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(categoriesMigration, {
    sequelize,
    modelName: 'Category'
  })
  return Category
}
