const adminMigrations = require('../models/columns/adminMigrations')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', adminMigrations)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admins')
  }
}
