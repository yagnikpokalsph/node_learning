const http = require('http')

const handler = require('./routes')
const {text} = require("./routes");

console.log(handler.text)
const server = http.createServer(handler.handler)

server.listen(8080)