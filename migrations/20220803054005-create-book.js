const createBookObj = require('../models/columns/20220803054005-create-book')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', createBookObj)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books')
  }
}
