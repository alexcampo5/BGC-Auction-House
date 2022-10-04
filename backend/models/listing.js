'use strict'
const { Model } = require('sequelize')
const user = require('./user')
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    static associate(models) {
      Listing.hasMany(models.Bid, { foreignKey: 'listingId' })
    }
  }
  Listing.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.STRING,
      itemSummary: DataTypes.STRING,
      startingBid: DataTypes.INTEGER,
      bidIncrement: DataTypes.INTEGER,
      approximateValue: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Listing',
      tableName: 'listings'
    }
  )
  return Listing
}
