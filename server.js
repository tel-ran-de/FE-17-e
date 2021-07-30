const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./models')

const personRouter = require('./routes/person.routes')

const PORT = 8080

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync()

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello, world'})
})

app.use('/api/v1/persons', personRouter)

app.listen(PORT, () => {
    console.log( `SERVER listening on ${PORT}` )
})