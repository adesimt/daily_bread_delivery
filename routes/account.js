const express = require('express');
const router = express.Router();


router.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'Daily Bread Login',
        style: 'account.css'
    
    });
})

router.get('/signup', (req, res, next) => {
    res.render('signup', {
        title: 'Daily Bread Signup',
        style: 'account.css'


});
})

module.exports = router;