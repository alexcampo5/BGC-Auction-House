const { User, Bid, Listing } = require('../models')

const getAllListings = async (req, res) => {
  try {
    let listings = await Listing.findAll({
      include: {
        model: Bid
      }
    })
    res.send(listings)
  } catch (error) {
    throw error
  }
}

const getListingById = async (req, res) => {
  try {
    let listing = await Listing.findByPk(req.params.listing_id, {
      include: {
        model: Bid
      }
    })
    res.send(listing)
  } catch (error) {
    throw error
  }
}

const createListing = async (req, res) => {
  try {
    let listingCreated = await Listing.create(req.body)
    res.send(listingCreated)
  } catch (error) {
    throw error
  }
}

const updateListing = async (req, res) => {
  try {
    let updatedListing = await Listing.update(req.body, {
      where: { id: req.params.listing_id },
      returning: true
    })
    res.send(updatedListing)
  } catch (error) {
    throw error
  }
}

const deleteListing = async (req, res) => {
  try {
    let deletedListing = await Listing.destroy({
      where: { id: req.params.listing_id }
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllListings,
  createListing,
  updateListing,
  deleteListing,
  getListingById
}
