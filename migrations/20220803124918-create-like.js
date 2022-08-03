const likesMigrations = require('../models/columns/likesMigrations')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', likesMigrations)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likes')
  }
}
