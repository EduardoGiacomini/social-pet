const userBO = require('../../entity/business/UserBO')

class CreateUser {
  async execute (user, responder) {
    try {
      const newUser = await userBO.create(user)
      this.removePassword(newUser)
      responder.success(newUser)
    } catch (error) {
      responder.error(error)
    }
  }

  removePassword (newUser) {
    newUser.password = undefined
  }
}

const createUser = new CreateUser()
module.exports = createUser
