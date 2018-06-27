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
    listing.date = request.body.date
    listing.time = request.body.time
    listing.description = request.body.description
    listing.imageURL = request.body.imageURL
    listing.email = request.body.email
    listing.upvotes = 0
    if (checkForAllFields(request) === true) {
        listing.save(error => {
            if (error)
               return response.send(error)
            return response.json({ message: 'Event added to the listings!' })
        })
    } else response.send('Not all fields are formatted correctly, please adjust and resubmit')
}

function checkForAllFields(request) {
    let rb = request.body
    if (rb.title === '' || rb.category === '' || rb.location === '' || rb.description === ''
        || rb.imageURL === '' || rb.email === '' || rb.time === '' || rb.date === '') {
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
    if (checkForAllFields(request) === true) {
        Listing.findByIdAndUpdate(request.params.event_id, request.body, (error, event) => {
            if (error)
                return response.send(error)
            return response.json({ message: 'Event updated!' })
        })
    } else response.send('Not all fields are formatted correctly, please adjust and resubmit')
}


