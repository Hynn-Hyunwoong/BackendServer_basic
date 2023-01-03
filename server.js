const express = require('express')
const app = express()

app.set('view engine', 'html')


app.get('/users', (req, res) => {
    res.send("GET /users")
})

app.get('/users', (req, res) => {
    res.send("POST /users")
})

app.listen (3000, () => {
    console.log('start of backend')
})