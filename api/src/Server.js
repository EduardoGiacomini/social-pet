const TimeZone = require('./configs/timezone')
const Database = require('./configs/database')
const http = require('http')

class Server {
  constructor (app) {
    this.app = app
  }

  async iniciar () {
    this.registrarEventosGLobais()
    TimeZone.configurar()
    await Database.conectar()
    await this.iniciarAplicacao()
  }

  registrarEventosGLobais () {
    process.on('unhandledRejection', (reason, p) => {
      throw reason
    })
    process.on('uncaughtException', (error) => {
      console.error('Error not handled %s', error)
      process.exit(1)
    })
  }

  async iniciarAplicacao () {
    return new Promise((resolve, reject) => {
      try {
        const servidorOnline = http.createServer(this.app).listen(process.env.PORT || 3000, () => {
          console.info('Servidor iniciado na porta %s', process.env.PORT)
          resolve(servidorOnline)
        })
      } catch (err) {
        console.error('Erro ao tentar iniciar o servidor %s', err)
        reject(err)
      }
    })
  }
}

module.exports = Server
