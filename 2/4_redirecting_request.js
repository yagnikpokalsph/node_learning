const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('<html lang="eng">')
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    }
    // After redirection create a file
    if (req.url === '/message' && req.method === 'POST'){
    fs.writeFileSync('./message.txt', "DUMMY");
    res.setHeader('Location','/');
    return res.end();
}

})
server.listen(8080);
