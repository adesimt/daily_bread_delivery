const express = require('express');
const router = express.Router();


router.get('/signin', (req, res, next) => {
    res.render('signin', {
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