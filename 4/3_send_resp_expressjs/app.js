const http = require('http');
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("in first middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("in last middleware");
    res.send("<html><h1>Hello from server</h1></html>")
})
app.listen(8080)