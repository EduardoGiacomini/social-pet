class Responder {
  constructor (req, res, next) {
    this.req = req
    this.res = res
    this.next = next
  }

  success (data) {
    this.res.json(data)
  }

  next () {
    this.next()
  }

  error (err) {
    err.status = 400
    this.next(err)
  }

  internalError (err) {
    err.status = 500
    this.next(err)
  }

  notFound (err) {
    err.status = 404
    this.next(err)
  }

  unauthorized (err) {
    err.status = 401
    this.next(err)
  }
}

module.exports = Responder
