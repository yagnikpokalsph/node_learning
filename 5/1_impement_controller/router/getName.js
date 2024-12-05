const express = require('express');

const getByName = require('../controller/name');

const router = express.Router();
router.get( '/',getByName.getByName);
module.exports = router;