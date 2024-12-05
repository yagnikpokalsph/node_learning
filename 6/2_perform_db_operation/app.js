const express = require("express");
const mysql = require("mysql");


const app = express();

// Middleware
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // Replace with your MySQL password
    database: "testdb"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.");
});

// Routes

// Create a new user
app.post("/users", (req, res) => {
    const { name, email, age } = req.body;
    const query = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
    db.query(query, [name, email, age], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, message: "User created successfully." });
    });
});


// Start server
app.listen(8080, () => {
    console.log(`Server running on http://localhost:8080`);
});
