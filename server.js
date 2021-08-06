const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const db = require('./models')
const dbLogging = require('./config/db.logging')
const mdlw = require('./middleware')

const personRouter = require('./routes/person.routes')

const PORT = 8080

const app = express()

app.use(morgan('common', {
    skip: (req, res) => res.statusCode < 400,
    stream: fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), {flags: 'a'})
}))

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({logging: msg => dbLogging.logStream.write(msg+"\n")})

app.get('/', [mdlw.authJwt.verifyToken], (req, res) => {
    res.status(200).json({message: 'Hello, world'})
})

require('./routes/user.routes')(app)
app.use('/api/v1/persons', personRouter)

app.listen(PORT, () => {
    console.log( `SERVER listening on ${PORT}` )
})