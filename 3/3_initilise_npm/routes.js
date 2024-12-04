const fs = require('fs');

const httpHandler = (req, res) => {
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
}

exports.handler = httpHandler;
exports.text = "Sample text"
// Another way to write
//module.exports.handler = httpHandler;
