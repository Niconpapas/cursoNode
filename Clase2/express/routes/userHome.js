const express = require('express');
const { home } = require('../controllers/userHomeController.js');
const router = express.Router();

router.get('/', home);

module.exports = router;