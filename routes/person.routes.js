const express = require('express')
const router = express.Router()

const person = require('../controllers/person.controller')

router.post('/', person.create)
router.get('/', person.findAll)
router.get('/:id', person.findOne)
router.put('/:id', person.update)


module.exports = router


// CRUD
/*

C - create - post 'persons/'
R - read All - get 'persons/'
R - read Person by Id - get 'persons/id'
U - update - put 'persons/id'
D - delete - delete 'persons/id'


 */