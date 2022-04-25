const express = require('express');

const router = express.Router();

router.use('/contextoInicial', require('./contextoInicial'));

router.use('/obtenerInfracciones', require('./obtenerInfracciones'));

module.exports = router;
