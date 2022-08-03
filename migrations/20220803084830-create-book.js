const booksMigration = require('../models/columns/booksMigration')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', booksMigration)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books')
  }
}
