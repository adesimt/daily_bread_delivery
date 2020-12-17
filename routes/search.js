var express = require('express');
var router = express.Router();
var restaurantData = require('../database/restaurant.json');
var menuData = require('../database/restaurant.json');

/* GET search page. */
router.get('/', function(req, res, next) {
var objectArray = [];

    for(var x = 0; x < restaurantData.dataroot.TB_Restaurant.length; x++){
         objectArray.push(restaurantData.dataroot.TB_Restaurant[x]);
    }

  res.render('search', { restaurantList : objectArray });
});

// Get menu items after selecting restaurant
router.get('/', function(req, res, next) {
  var menuArray = [];
  
    for(var x = 0; x < menuData.dataroot.TB_Restaurant.TB_Menu.length; x++){
        menuArray.push(menuData.dataroot.TB_Restaurant[x].TB_Menu[x].food_item);
    }
  
  res.render('searchMenu', { menuList : menuArray });
});


module.exports = router;