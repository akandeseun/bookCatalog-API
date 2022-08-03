const { DataTypes } = require('sequelize')

module.exports = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  BookId: {
    type: DataTypes.UUID
  },
  displayName: {
    type: DataTypes.STRING
  },
  series: {
    type: DataTypes.STRING
  },
  volume: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}
