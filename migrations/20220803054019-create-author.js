const authorsMigration = require('../models/columns/authorsMigration')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authors', authorsMigration)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Authors')
  }
}
