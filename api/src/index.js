const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const helloWorld = require('./router/helloWorld/HelloWorld')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// TODO: Adicionar rotas
app.use('/api', helloWorld)

module.exports = app
