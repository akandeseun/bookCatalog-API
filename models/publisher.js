const { Model } = require('sequelize')
const publishersMigration = require('./columns/publishersMigration')
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Publisher.init(publishersMigration, {
    sequelize,
    modelName: 'Publisher'
  })
  return Publisher
}
