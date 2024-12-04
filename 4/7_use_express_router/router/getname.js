const express = require('express');
const router = express.Router();

// Middleware to parse JSON
router.use(express.json());

// Route to handle /name
router.post('/name', (req, res) => {
    console.log(req.body.name);
    res.status(200).json({
        name: req.body.name,
        message: "name is " + req.body.name,
    });
});

module.exports = router;