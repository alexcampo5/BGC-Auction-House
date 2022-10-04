const Router = require('express').Router()
const controller = require('../controllers/BidController')
//const middleware = require('../middleware')

Router.get('/:bid_id', controller.getBidById)
Router.get('/', controller.getAllBids)
Router.post('/', controller.createBid)
Router.put('/:bid_id', controller.updateBid)
Router.delete('/:bid_id', controller.deleteBid)

module.exports = Router
