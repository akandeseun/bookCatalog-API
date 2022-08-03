const categoriesMigration = require('../models/columns/categoriesMigration')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', categoriesMigration)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories')
  }
}
