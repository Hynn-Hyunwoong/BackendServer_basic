const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/users', (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Methods","POST,GET,DELETE,OPTIONS")
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With")
    res.send("GET /users")
})

app.get('/users', (req, res) => {
    res.send("POST /users")
})

app.listen (3000, () => {
    console.log('start of backend')
})