const express = require('express')
const Responder = require('../../commons/responder')
const helloWorld = require('../../usecase/helloWorld/HelloWorld')

const router = express.Router()
router.get('/hello-world', (req, res, next) => {
  helloWorld.execute(new Responder(req, res, next))
})

module.exports = router
