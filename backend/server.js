require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
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

// Connect to database
mongoose.connect(process.env.MONGO_URI).then(() => {
    // Listens for requests after we connect to database
    app.listen(4000, () => {
    console.log('Connected to database & listening on port 4000!!')
})

}).catch((errot) => {
    console.log(console.error())
})

