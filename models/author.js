const { Model } = require('sequelize')
const authorsMigration = require('./columns/authorsMigration')
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Author.init(authorsMigration, {
    sequelize,
    modelName: 'Author'
  })
  return Author
}
