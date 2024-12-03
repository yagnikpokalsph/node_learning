const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('<html lang="eng">')
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    }
    res.write('<html lang="eng">')
    res.write('<head><title>My first page in node</title><head>')
    res.write('<body><h1>Hello from app</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(8080);