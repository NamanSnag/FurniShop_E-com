const express = require('express');
const router = express.Router();

// user routes link
router.use('/user', require('./user'));

// products
router.use('/product', require('./product'));

// orders
router.use('/order', require('./order'));

module.exports = router;