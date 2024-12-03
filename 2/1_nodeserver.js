const http = require('http')

const server =http.createServer((req,res)=>{
    console.log(req)
    console.log("Hello")
    // process will exit and come out of the server
    //process.exit()
    }
)
server.listen(8080)