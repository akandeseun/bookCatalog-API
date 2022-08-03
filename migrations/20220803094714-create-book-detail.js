'use strict'

const bookDetailsMigration = require('../models/columns/bookDetailsMigration')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookDetails', bookDetailsMigration)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookDetails')
  }
}
