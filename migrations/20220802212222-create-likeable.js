module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likeables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likeables')
  }
}
