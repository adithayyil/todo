const express = require('express')
const {
    getTodo,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
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
router.delete('/:id', deleteTodo)

// UPDATE a todo
router.patch('/:id', updateTodo)

module.exports = router