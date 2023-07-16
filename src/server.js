const express = require("express")
const {PORT} = require('./config')
const {apiRouter} = require('./routers')

const app = express()

app.use('/api', apiRouter)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})