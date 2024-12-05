const express = require('express');

const router = express.Router();
const controller = require('../controller/nameController')
router.post( '/',controller.savePersonController);
router.get( '/',controller.getPersonController);

module.exports = router;