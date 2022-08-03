module.exports = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  authorId: {
    type: Sequelize.UUID
  },
  title: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  isbn: {
    type: Sequelize.STRING
  },
  createdBy: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
}
