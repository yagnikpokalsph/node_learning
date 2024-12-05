const express = require('express');
const router = express.Router();
router.use(express.json())
router.post('/name',(req,res)=>{
    console.log(req.body.name);
    res.json({
        name:req.body.name,
        message:"name is "+req.body.message,
    }).status(200)
})
module.exports = router;