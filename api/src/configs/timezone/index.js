const moment = require('moment-timezone')

class TimeZone {
  static setup () {
    moment.tz.setDefault(process.env.TIME_ZONE)
  }
}

module.exports = TimeZone
