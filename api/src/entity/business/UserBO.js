const User = require('../schema/User')

class UserBO {
  async create (user) {
    return User.create(user)
  }

  async findByEmail (email) {
    return User.findOne({email: email})
  }

  async update (user) {
    return User.updateOne({ _id: user._id }, user)
  }
}

const userBO = new UserBO()
module.exports = userBO
