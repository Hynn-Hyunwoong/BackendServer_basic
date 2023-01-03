const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(cors())

const user = [
    {
    idx:1,
    userid:'choihwoong',
    userpw:'1234',
    username : 'hynn',
    gender : '남자'
    },
]

// REST API 
// 1. 복수형 차이
// board/view  => boards/view
// 기존 GET/POST 나뉜것에 대한 세분화
// 수정 PUT 
// 삭제 DELETE

//PATH 에 동사 X.

//list
app.get('/users', (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Methods","POST,GET,DELETE,OPTIONS")
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With")
    res.send(JSON.stringify(user))
    // res.json(user)
})


// 이러한 유형의 get,post,put,delete method 는 가장 아래줄에 코드로 위치하는것이 좋음
// app.get("/users/:id", (req,res) =>{

// })

//write
app.post('/users', (req, res) => {
    const {userid,userpw,username,gender} = req.body
    const response = { userid, userpw, username, gender}
    console.log("resopnse : ", response)
    user.push(response)
    console.log(req.body)
    res.json(response)
})

app.listen (3000, () => {
    console.log('start of backend')
})

//view
app.get("/users/:id", (req,res) =>{
    console.log(req.params)
    res.json(user)
})