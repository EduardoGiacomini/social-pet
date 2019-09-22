const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const createUser = require('./router/user/CreateUser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// TODO: Adicionar rotas
app.use('/api', createUser)

module.exports = app
