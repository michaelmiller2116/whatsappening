const Listing = require('../models/event')


exports.getEvents = (request, response) => {
    Listing.find((error, events) => {
        if (error)
            response.send(error)
        response.json(events)
    })
}

exports.postEvent = (request, response) => {
    let listing = new Listing()
    listing.title = request.body.title
    listing.category = request.body.category
    listing.location = request.body.location
    listing.description = request.body.description
    listing.imageURL = request.body.imageURL
    listing.email = request.body.email
    listing.upvotes = 0
    if (checkForAllFields(request) === true) {
        listing.save(error => {
            if (error)
                response.send(error)
            response.json({ message: 'Event added to the listings!' })
        })
    } else response.send('Not all fields are formatted correctly, please adjust and resubmit')
}

function checkForAllFields(request) {
    let rb = request.body
    if (rb.title === '' || rb.category === '' || rb.location === '' || rb.description === ''
        || rb.imageURL === '' || rb.email === '') {
            return false
        } else return true
}

exports.getEvent = (request, response) => {
    Listing.findById(request.params.event_id, (error, event) => {
        if (error)
            return response.send(error)
        return response.json(event)
    })
}

exports.deleteEvent = (request, response) => {
    Listing.findByIdAndRemove(request.params.event_id, (error, event) => {
        if (error)
            return response.send(error)
        return response.json({ message: 'Event removed from the listings!' })
    })
}

exports.updateEvent = (request, response) => {
    Listing.findByIdAndUpdate(request.params.event_id, { title: 'Changed' }, (error, event) => {
        if (error)
            return response.send(error)
        return response.json({ message: 'Event updated!' })
    })
}


