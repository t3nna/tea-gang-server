const {json} = require('express')
const disablePoweredBy = require('./disablePoweredBy')

const cors = require('cors')
const helmet = require('helmet')
const rateLimiter = require('express-rate-limit')
const slowDown = require('express-slow-down')

module.exports = (app) => {
    app.use(json())

    app.use(disablePoweredBy)
    app.use(cors())

    app.use(
        helmet({
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    scriptSrc: [
                        "'self'",
                        "'unsafe-inline'",
                        'https://cdn.jsdelivr.net',
                        'https://code.jquery.com',
                    ],
                },
            },
        })
    );

}