const express = require('express')
const Todo = require('../models/todoModels')

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
router.post('/', async (request, response) => {
    const {title, notes} = request.body

    try {
        const todo = await Todo.create({title, notes})
        response.status(200).json(todo)

    } catch(error) {
        response.status(400).json({error: error.message})
    }

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