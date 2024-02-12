const express = require('express');
const { route } = require('./auth');
const post = express.Router();

router.get('/post', (req, res) =>{
    res.send('Hello Post')
})

module.exports = router