const moment = require('moment-timezone')

class TimeZone {
  static configurar () {
    moment.tz.setDefault(process.env.TIME_ZONE)
  }
}

module.exports = TimeZone
