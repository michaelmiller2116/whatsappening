const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: String,
    category: String,
    location: String,
    date: { type: Date, default: Date.now },
    description: String,
    imageURL: String,
    email: String,
    upvotes: Number
})

module.exports = mongoose.model('Event', EventSchema)