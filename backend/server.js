const express = require('express')

// initiates express app
const app = express()

// listens for requests
app.listen(4000, () => console.log('listening on port 4000!!'))