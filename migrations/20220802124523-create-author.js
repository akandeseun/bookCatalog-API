module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authors', {
      authorId: {
        type: Sequelize.UUID
      },
      author: {
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
    })
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Authors')
  }
}
