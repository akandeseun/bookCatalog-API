const publishersMigration = require('../models/columns/publishersMigration')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publishers', publishersMigration)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Publishers')
  }
}
