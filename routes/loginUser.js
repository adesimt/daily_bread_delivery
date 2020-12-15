const { Router } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const user = require('../database/users.json');


router.post('/login', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);
})

module.exports = router;