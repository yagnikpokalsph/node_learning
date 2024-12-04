const http = require('http')
const fs = require('fs');
let server = http.createServer((req, res) => {

    if (req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    }
    if (req.url === '/message'){
        req.on('data', (chunk) => {
            // Print the data which we added on the html button from console
            //http://localhost:8080/
        console.log(chunk.toString().split("=")[1]);
        })
    }
})
server.listen(8080)