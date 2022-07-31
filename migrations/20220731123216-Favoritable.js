module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favoritables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      // model_type, model_id, f_model_type, f_model_id  e.g.
      // user (Models/User, 22) -> book (Models/BookDetail, 45)
      // in English Language >>>>
      // user(model) likes books(favored_model),
      // user(model) likes author(favored_model)
      model: {
        type: Sequelize.STRING
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favoritables')
  }
}
