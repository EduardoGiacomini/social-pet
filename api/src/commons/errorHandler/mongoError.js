function mongoError (err, req, res, next) {
  if (err.name === 'MongoError' && err.code === 11000) {
    const payload = {
      status: 400,
      message: err.message,
      errors: {}
    }
    return res.status(payload.status).json(payload)
  }
  next(err)
}

module.exports = mongoError
