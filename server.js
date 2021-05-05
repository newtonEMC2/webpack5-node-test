
const express = require('express')
const sq = require('sequelize')
const a = require('./ie')
// const c = require('@config/here')
const c = require('@config/here')
const b = require('./ieee')
const app = express()
// app.use(cors())
const port = 3002

app.get('/', (req, res) => {
    res.status(200).json({ a: a() * c() * b() })
})


const serverObj = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = serverObj;
