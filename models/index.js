const config = require('../config/db.config')
const logging = require('../config/db.logging')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
        logging: msg => logging.logStream.write(msg+"\n")
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.persons = require('./person.model')(sequelize, Sequelize)
db.users = require('./user.model')(sequelize, Sequelize)

module.exports = db