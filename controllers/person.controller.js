const models = require('../models')
const Person = models.persons

exports.create = (req, res) => {
    const person = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        email: req.body.email,
        company_id: req.body.company_id,
    }
    Person.create(person)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Person"
            })
        })
}

exports.findAll = (req, res) => {
    Person.findAll()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving all persons"
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Person.findByPk(id)
        .then(data => {

            if (!data) {
                return res.status(404).send({message: "Person not Found"})
            }

            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving persons By ID"
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id
    Person.update(req.body, {
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                Person.findByPk(id)
                    .then( data => res.status(200).send(data) )
            } else {
                res.status(400).send({
                    message: `Cannot update Person with id=${id}. Maybe Person was not found or req.body is empty`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating Person with id='+id
            })
        })
}