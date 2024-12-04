const http = require('http')

const express = require('express');
const res = require("express/lib/response");
const req = require("express/lib/request");

const app = express();

app.use((req,res,next)=>{
console.log("Call first time")
    next();
})
app.use((req,res,next)=>{
    console.log("Call last time")
})
const server = http.createServer(app);
server.listen(8080);