const models = require('../models')
const User = models.users

const checkDuplicateEmail = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                return res.status(400).send({
                    message: 'Email already exists'
                })
            }
            next()
        })
}

const verifySignUp = {
    checkDuplicateEmail
}

module.exports = verifySignUp