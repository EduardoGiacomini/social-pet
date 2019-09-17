const mongoose = require('mongoose')

class Database {
  static async conectar () {
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  }
}

module.exports = Database
