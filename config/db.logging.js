const fs = require('fs')
const path = require('path')

module.exports = {
    logStream: fs.createWriteStream(path.join(__dirname,'..', 'logs', 'db-log.log'), {'flags': 'a'})
}