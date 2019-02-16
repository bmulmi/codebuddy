var express = require('express');
var router = express.Router();

var project = [{
    title: "title",
    description: "description",
    languages: "C++"  
  },
  {
    title: "title",
    description: "description",
    languages: "C++" 
  }, 
{
  title: "title",
  description: "description",
  languages: "C++" 
},
{  title: "title",
description: "description",
languages: "C++" }];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'CodeBuddy', 
    project: project
  });
});

module.exports = router;
