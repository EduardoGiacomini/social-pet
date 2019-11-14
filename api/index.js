require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const app = require('./src/index')
const Server = require('./src/Server')

const server = new Server(app)
server.start()
