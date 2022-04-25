const express = require('express');

const router = express.Router();

router.post('/:userDNI', require('./getInfractions'));

module.exports = router;
