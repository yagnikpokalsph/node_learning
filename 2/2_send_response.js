const http = require('http')

let server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    // res.write('Hello World')
    res.write('<html lang="eng">')
    res.write('<head><title>My first page in node</title><head>')
    res.write('<body><h1>Hello from app</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(8080);
