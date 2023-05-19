require('dotenv').config()
const express = require('express')


// initiates express app
const app = express()

// Middleware
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})


// Routes
app.get('/', (request, response) => {
    response.json({msg: 'Welcome to the app'})
})


// listens for requests
app.listen(4000, () => {
    console.log('listening on port 4000!!')
})