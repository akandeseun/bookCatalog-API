const { DataTypes } = require('sequelize')

module.exports = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  likeableId: {
    type: DataTypes.UUID
  },
  likeableType: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.UUID
  }
}
