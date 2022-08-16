const usersMigration = require('../models/columns/usersMigration')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', usersMigration)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
}
