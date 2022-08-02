module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookDetails', {
      BookId: {
        type: Sequelize.UUID
      },
      displayName: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('BookDetails')
  }
}
