const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ListingRouter = require('./ListingRouter')
const BidRouter = require('./BidRouter')

Router.use('/users', UserRouter)
Router.use('/listings', ListingRouter)
Router.use('/bids', BidRouter)
module.exports = Router
