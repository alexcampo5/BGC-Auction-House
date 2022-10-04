'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      listingId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'listings',
          key: 'id'
        }
      },
      bidAmount: {
        type: Sequelize.INTEGER
      },
      maxBid: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      bidIncrement: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    await queryInterface.dropTable('bids')
  }
}
