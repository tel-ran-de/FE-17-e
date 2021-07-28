const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./models')

const PORT = 8080

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync()

app.get('/', (req, res) => {
    res.json({message: 'Hello, world'})
})


app.listen(PORT, () => {
    console.log( `SERVER listening on ${PORT}` )
})