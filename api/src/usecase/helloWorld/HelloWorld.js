class HelloWorld {
  async execute (responder) {
    try {
      responder.success({ hello: 'world' })
    } catch (e) {
      responder.error(e)
    }
  }
}

const helloWorld = new HelloWorld()
module.exports = helloWorld
