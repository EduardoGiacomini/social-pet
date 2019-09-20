const express = require('express')
const Joi = require('joi')
const validate = require('express-validation')
const Responder = require('../../commons/responder')
const createUser = require('../../usecase/user/CreateUser')

const schema = {
  bod: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  }
}

const router = express.Router()
router.post('/user', validate(schema), (req, res, next) => {
  const user = req.body
  createUser.execute(user, new Responder(req, res, next))
})

module.exports = router
