var express = require('express');
var router = express.Router();
var dbc = require('./databaseConnect');

/* GET home page. */

router.get('/', function(req, res, next){
  res.render('signup', {});
});

router.post('/', function(req, res, next) {
  var obj = {
    username : req.body.username,
    email : req.body.email,
    password : req.body.password
  }
  dbc.setUserData(obj);
  res.redirect("/login");
});

module.exports = router;
