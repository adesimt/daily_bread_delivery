var express = require('express');
var router = express.Router();
const fs =  require('fs');
const user = require('../model/model');
const { v4: uuidv4 } = require('uuid');


/* GET users listing. */
router.post('/create', function(req, res, next) {

  user.id = uuidv4();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;


  //get users json data and convert to obj
  let usersData = fs.readFileSync('./database/users.json');

  usersDataObj = JSON.parse(usersData);

  usersDataObj.push(user);

  // convert the data back to json
  usersDataJson = JSON.stringify(usersDataObj);

  // write the data to the users json file
  fs.writeFile('./database/users.json', usersDataJson, err =>{
    if(err){
      console.log('error');
    }else{
      console.log('success');
    }
  })

  res.redirect('/login')
});

module.exports = router;
