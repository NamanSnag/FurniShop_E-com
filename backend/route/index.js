const express = require('express');
const router = express.Router();

// user routes link
// router.use('/user', require('./user'));

// get all tasks
router.get('/', (req,res) => {
    return res.send("<h1>Hello</h1>");
});

module.exports = router;