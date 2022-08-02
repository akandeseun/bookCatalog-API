const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      categoryId: DataTypes.UUID,
      category: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Category'
    }
  )
  return Category
}