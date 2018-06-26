const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000


// Return welcome test message
app.get('/', (request, response) => {
    response.json({message: 'Welcome to WhatsAppening!'})
})


// Error response handlers
app.use((request, response, next) => {
    const error = new Error('There is an error in your request')
    response.status(404)
    next(error)
})

app.use((error, request, response, next) => {
    response.status(response.statusCode || 500)
    response.json({
        message: error.message
    })
})

app.use(cors())
app.listen(port)
