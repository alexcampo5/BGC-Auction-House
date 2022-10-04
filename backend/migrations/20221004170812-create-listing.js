'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING(2000)
      },
      description: {
        type: Sequelize.STRING(2000)
      },
      itemSummary: {
        type: Sequelize.STRING(2000)
      },
      startingBid: {
        type: Sequelize.INTEGER
      },
      bidIncrement: {
        type: Sequelize.INTEGER
      },
      approximateValue: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('listings')
  }
}
