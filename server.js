const express = require('express')
const app = express()

app.get('/users', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.send("GET /users")
})

app.get('/users', (req, res) => {
    res.send("POST /users")
})

app.listen (3000, () => {
    console.log('start of backend')
})