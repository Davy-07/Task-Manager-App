const express = require('express');
const router = express.Router();
const {welcome} = require('../controllers/tasks');

router.get('/',welcome);

module.exports = router;