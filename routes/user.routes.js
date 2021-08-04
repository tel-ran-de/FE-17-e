const controller = require('../controllers/user.controller')
const {verifySignUp} = require('../middleware')

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers", "Authorization, Content-Type, Accept"
        )
        next()
    })

    app.post('/api/v1/auth/signup', [verifySignUp.checkDuplicateEmail], controller.signup)

    app.post('/api/v1/auth/signin', controller.signin)
}