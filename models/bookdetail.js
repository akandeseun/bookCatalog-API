const { Model } = require('sequelize')

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
  BookDetail.init(
    {
      displayTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      series: {
        type: DataTypes.STRING,
        allowNull: true
      },
      volume: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'BookDetail'
    }
  )
  return BookDetail
}
