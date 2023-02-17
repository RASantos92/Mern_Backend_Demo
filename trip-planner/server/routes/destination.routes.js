
const DestinationController = require('../controllers/destination.controller')

module.exports = app => {
    app.get('/api/destination', DestinationController.getAllDestinations);
    app.post('/api/destination/', DestinationController.createDestination)
    app.get('/api/destination/:id', DestinationController.getDestinationById)
    app.delete('/api/destination/:id', DestinationController.deleteDestinationById)
    app.put('/api/destination/:id', DestinationController.updateDestinationById)
}
