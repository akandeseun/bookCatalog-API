module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likeables', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      likeableId: {
        type: Sequelize.UUID
      },
      likeableType: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likeables')
  }
}
