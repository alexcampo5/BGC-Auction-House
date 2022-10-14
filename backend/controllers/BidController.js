const { User, Bid, Listing } = require('../models')

const getAllBids = async (req, res) => {
  try {
    let bids = await Bid.findAll()
    res.send(bids)
  } catch (error) {
    throw error
  }
}
const getAllBidsviaListingId = async (req, res) => {
  try {
    let bids = await Bid.findAll({
      where: {
        listingId: req.params.bid_id
      },
      include: {
        model: User
      }
    })
    res.send(bids)
  } catch (error) {
    throw error
  }
}

const getBidById = async (req, res) => {
  try {
    let bid = await Bid.findByPk(req.params.bid_id)
    res.send(bid)
  } catch (error) {
    throw error
  }
}

const createBid = async (req, res) => {
  try {
    let bidCreated = await Bid.create(req.body)
    res.send(bidCreated)
  } catch (error) {
    throw error
  }
}

const updateBid = async (req, res) => {
  try {
    let updatedBid = await Bid.update(req.body, {
      where: { id: req.params.bid_id },
      returning: true
    })
    res.send(updatedBid)
  } catch (error) {
    throw error
  }
}

const deleteBid = async (req, res) => {
  try {
    let deletedBid = await Bid.destroy({
      where: { id: req.params.Bid_id }
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllBids,
  createBid,
  updateBid,
  deleteBid,
  getBidById,
  getAllBidsviaListingId
}
