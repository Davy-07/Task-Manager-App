const express = require('express');
const router = express.Router();
const {welcome} = require('../controllers/tasks');

router.route('/').get(welcome);

module.exports = router;