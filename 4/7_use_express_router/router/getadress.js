const express = require('express');
const router = express.Router();

// Correctly apply middleware
router.use(express.json());

// Parse from body
/*
curl --location 'localhost:8080/address' \
--header 'Content-Type: application/json' \
--data '{
    "address":"105 my home"
}'
 */
router.post('/address', (req, res) => {
    const address = req.body.address || "not provided"; // Extract address from body or use fallback
    res.status(200).json({
        name: address,
        message: `Address is ${address}`,
    });
});
// Parse from query
/*
curl --location --request POST 'localhost:8080/address_query?address=105%20myhome' \
--data ''
 */
router.post('/address_query', (req, res) => {
    const address = req.query.address || "not provided";
    res.json({
        address: address,
        message: `Address from query is ${address}`,
    })
})

module.exports = router;
