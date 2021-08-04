const models = require('../models')
const config = require('../config/auth.config')
const User = models.users

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signup = (req, res) => {
    User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    })
        .then(user => {
            res.send({
                id: user.id,
                email: user.email
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.signin = (req, res) => {
    User.findOne({where: {email: req.body.email}})
        .then(user => {
            if (!user) {
                return res.status(401).send({accessToken: null, message: 'Email or Password is incorrect'})
            }
            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            if (!passwordIsValid) {
                return res.status(401).send({accessToken: null, message: 'Email or Password is incorrect'})
            }

            const token = jwt.sign({id: user.id}, config.secret, {expiresIn: 86400})

            res.status(200).send({
                id: user.id,
                accessToken: token
            })

        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}