const userBO = require('../../entity/business/UserBO')

class CreateUser {
  async execute (user, responder) {
    try {
      await this.checkUserExists(user.email)
      const newUser = await userBO.create(user)
      this.removePassword(newUser)
      responder.success(newUser)
    } catch (error) {
      responder.error(error)
    }
  }

  async checkUserExists (email) {
    const userExists = await userBO.findByEmail(email)
    if (userExists) {
      const error = new Error()
      error.message = 'DUPLICATED_USER'
      throw error
    }
  }
  
  removePassword (newUser) {
    newUser.password = undefined
  }
}

const createUser = new CreateUser()
module.exports = createUser
