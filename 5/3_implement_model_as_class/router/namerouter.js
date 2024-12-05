const express = require('express');

const router = express.Router();
const controller = require('../controller/nameController')
router.get( '/',controller.nameController);
module.exports = router;