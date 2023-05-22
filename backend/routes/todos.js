const express = require('express')

const router = express.Router()

// All routes here

// GET all todo
router.get('/', (request, response) => {
    response.json({mssg: 'GET all todos'})
})

// GET a single todo
router.get('/:id', (request, response) => {
    response.json({mssg: 'GET a single todo'})
})

// POST a new todo
router.post('/', (request, response) => {
    response.json({mssg: 'POST a new todo'})
})

// DELETE a todo
router.delete('/:id', (request, response) => {
    response.json({mssg: 'DELETE a todo'})
})

// UPDATE a todo
router.patch('/:id', (request, response) => {
    response.json({mssg: 'UPDATE a todo'})
})

module.exports = router