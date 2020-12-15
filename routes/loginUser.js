const { Router } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');
let users = require('../database/users.json');


router.post('/login', (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;


    // test if the login user is already in the database
    let test = users.find( user => {
        return user.email === email && user.password === password;
    });


    if(test){
        res.redirect('/search');
    }else{
        res.redirect('/');
    }
})

module.exports = router;