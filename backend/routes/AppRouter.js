const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ListingRouter = require('./ListingRouter')
const BidRouter = require('./BidRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/listings', ListingRouter)
Router.use('/bids', BidRouter)
Router.use('/auth', AuthRouter)
module.exports = Router
