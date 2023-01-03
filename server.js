const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/users', (req, res) => {
    res.send("GET /users")
})

app.get('/users', (req, res) => {
    res.send("POST /users")
})

app.listen (3000, () => {
    console.log('start of backend')
})