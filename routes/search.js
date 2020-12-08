var express = require('express');
var router = express.Router();
var restaurantData = require('../database/restaurant.json');

/* GET home page. */
router.get('/', function(req, res, next) {
var objectArray = [];

    for(var x = 0; x < restaurantData.dataroot.TB_Restaurant.length; x++){
         objectArray.push(restaurantData.dataroot.TB_Restaurant[x]);
    }

  res.render('search', { restaurantList : objectArray });
});

module.exports = router;