const express = require('express')
const api = require('./controllers/api')

const apiRouter = new express.Router()

apiRouter.get('/ping', api.ping)
apiRouter.get('/tea-blog', api.getAllBlogs)

module.exports = {
    apiRouter
}