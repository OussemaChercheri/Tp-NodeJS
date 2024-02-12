const express = require('express');
const router = express.Router();

router.get('/login', (req, res) =>{
    res.send('hello login');
})

router.get('/register', (req, res) =>{
    res.send('hello register');
})

module.exports = router