
const express = require('express')
const sq = require('sequelize')
// import cors from 'cors'
const a = require('./ie')
// const c = require('@config/here')
import c from '@config/here'
import b from './ieee'
const app = express()
// app.use(cors())
const port = 3002

app.get('/', (req, res) => {
    res.status(200).json({ a: a(), b: b() * c() })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
