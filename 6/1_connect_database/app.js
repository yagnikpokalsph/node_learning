let mysql = require('mysql');
// Referance https://www.geeksforgeeks.org/how-to-install-mysql-on-macos/
let con = mysql.createConnection({
    host: "localhost",
    user: "yp",
    password: "mynodeapp"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});