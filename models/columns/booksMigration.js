const { DataTypes } = require('sequelize')

module.exports = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  authorId: {
    type: DataTypes.UUID
  },
  title: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  isbn: {
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
