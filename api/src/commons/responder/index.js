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

  error (error) {
    this.res.status(400).json(error);
  }

  internalError (error) {
    this.res.status(500).json(error)
  }

  notFound (error) {
    this.res.status(404).json(error)
  }

  unauthorized (error) {
    this.res.status(401).json(error)
  }
}

module.exports = Responder
