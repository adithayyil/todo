require('dotenv').config()
const express = require('express')
const todoRoutes = require('./routes/todos')

// Initiates express app
const app = express()

// Middleware
app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})


// Uses bundled routes from todoRoutes
app.use('/api/todos', todoRoutes)


// Listens for requests
app.listen(4000, () => {
    console.log('listening on port 4000!!')
})