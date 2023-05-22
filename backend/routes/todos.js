const express = require('express')
const {
    getTodo,
    getTodos,
    createTodo
} = require('../controllers/todoController')

const router = express.Router()

// All routes here

// GET all todo
router.get('/', getTodos)

// GET a single todo
router.get('/:id', getTodo)

// POST a new todo
router.post('/', createTodo)

// DELETE a todo
router.delete('/:id', (request, response) => {
    response.json({mssg: 'DELETE a todo'})
})

// UPDATE a todo
router.patch('/:id', (request, response) => {
    response.json({mssg: 'UPDATE a todo'})
})

module.exports = router