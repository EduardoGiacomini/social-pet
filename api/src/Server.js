const TimeZone = require('./configs/timezone')
const Database = require('./configs/database')
const http = require('http')

class Server {
  constructor (app) {
    this.app = app
  }

  async start () {
    this.registerGlobalsEvents()
    TimeZone.setup()
    await Database.connect()
    await this.startApplication()
  }

  registerGlobalsEvents () {
    process.on('unhandledRejection', (reason, p) => {
      throw reason
    })
    process.on('uncaughtException', (error) => {
      console.error('Error not handled %s', error)
      process.exit(1)
    })
  }

  async startApplication () {
    return new Promise((resolve, reject) => {
      try {
        const server = http.createServer(this.app).listen(process.env.PORT || 3000, () => {
          console.info('Servidor iniciado na porta %s', process.env.PORT)
          resolve(server)
        })
      } catch (err) {
        console.error('Erro ao tentar iniciar o servidor %s', err)
        reject(err)
      }
    })
  }
}

module.exports = Server
