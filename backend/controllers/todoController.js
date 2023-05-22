const mongoose = require('mongoose')
const Todo = require('../models/todoModels')

// Get all todos
const getTodos = async (request, response) => {
    const todos = await Todo.find({}).sort({createdAt: -1})

    response.status(200).json(todos)
}

// Get a single todo
const getTodo = async (request, response) => {
    const {id} = request.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({error: 'No such todo!'})
    }

    const todo = await Todo.findById(id)

    if (!todo) {
        return response.status(404).json({error: 'No such todo!'})
    }

    response.status(200).json(todo)
}


// Create new todo
const createTodo = async (request, response) => {
    const {title, notes} = request.body

    // Add doc to database
    try {
        const todo = await Todo.create({title, notes})
        response.status(200).json(todo)

    } catch(error) {
        response.status(400).json({error: error.message})
    }
}


// Delete a todo
const deleteTodo = async (request, response) => {
}

// Update a todo
const updateTodo = async (request, response) => {
}





module.exports = {
    getTodos,
    getTodo,
    createTodo

}