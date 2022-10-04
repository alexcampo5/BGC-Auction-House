const Router = require('express').Router()
const controller = require('../controllers/ListingController')
//const middleware = require('../middleware')

Router.get('/:listing_id', controller.getListingById)
Router.get('/', controller.getAllListings)
Router.post('/', controller.createListing)
Router.put('/:listing_id', controller.updateListing)
Router.delete('/:listing_id', controller.deleteListing)

module.exports = Router
