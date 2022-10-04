const { User, Bid, Listing } = require('../models')

const getAlllistings = async (req, res) => {
  try {
    let listings = await Listing.findAll()
    res.send(listings)
  } catch (error) {
    throw error
  }
}

const getListingById = async (req, res) => {
  try {
    let listing = await Listing.findByPk(req.params.listing_id)
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
  getAlllistings,
  createListing,
  updateListing,
  deleteListing,
  getListingById
}
