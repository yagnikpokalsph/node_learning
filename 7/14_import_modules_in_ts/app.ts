// import express from 'express'
const express = require("express")
const app = express()
app.get("/", (req:any, res:any) => {
    res.status(200).json({
        code: 200,
    })
})

app.listen(8080)