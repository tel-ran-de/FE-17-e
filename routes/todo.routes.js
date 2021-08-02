const todos = require('../controllers/todo.controller')
const router = require('express').Router()

module.exports = app => {
    router.get('/', todos.findAll)
    router.post('/', todos.create)
    router.put('/:id', todos.update)
    router.delete('/:id', todos.delete)

    app.use('/api/todos', router)
}