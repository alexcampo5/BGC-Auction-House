'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    static associate(models) {
      Bid.belongsTo(models.User, { foreignKey: 'userId' })
      Bid.belongsTo(models.Listing, { foreignKey: 'listingId' })
    }
  }
  Bid.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      listingId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'listings',
          key: 'id'
        }
      },
      bidAmount: DataTypes.INTEGER,
      maxBid: {
        type: DataTypes.INTEGER,
        require: false
      },
      bidIncrement: {
        type: DataTypes.INTEGER,
        require: false
      }
    },
    {
      sequelize,
      modelName: 'Bid',
      tableName: 'bids'
    }
  )
  return Bid
}
