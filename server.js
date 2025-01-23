require('dotenv').config()
const express = require('express')

const app = express()

// middleware. Need to give next so it can move on the next middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

//listen to port
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
  })

//simple get for homepage
app.get('/', (req, res) => {
res.json({mssg: 'Welcome to the app'})
})