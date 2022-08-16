const { DataTypes } = require('sequelize')

module.exports = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER
  },
  isbn: {
    type: DataTypes.STRING
  },
  publisherId: {
    type: DataTypes.UUID
  },
  categoryId: {
    type: DataTypes.UUID
  },
  series: {
    type: DataTypes.STRING
  },
  volume: {
    type: DataTypes.INTEGER
  },
  language: {
    type: DataTypes.STRING
  },
  createdBy: {
    type: DataTypes.STRING
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
