const db = require('../models')

const Todo = db.todos

exports.create = (req, res) => {
    if (!req.body.title || !req.body.title.trim()) {
        res.status(400).send({message: "Content can not be empty"})
        return
    }
    const newTodo = new Todo({
        title: req.body.title
    })

    newTodo
        .save()
        .then( data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some error occurred while creating new Todo"})
        })
}

exports.findAll = (req, res) => {
    Todo.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Todos"
            })
        })
}

exports.update = (req, res) => {
    console.log( req.body )
    if (!req.body.title && !req.body.completed) {
        return res.status(400).send({message: "Data to update can not be empty"})
    }
    const id = req.params.id
    Todo.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
                })
            } else {
                res.send({message: 'Todo was updated successfully!'})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error updating Todo with id=${id}`
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Todo.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
                })
            } else {
                res.send({message: "Todo was deleting successfully!"})
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message || `Error deleting Todo with id=${id}`})
        })
}



/*

C
R
U  /todos/:id
D  /todos/:id


 */