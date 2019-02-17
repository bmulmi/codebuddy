var express = require('express');
var router = express.Router();

var dbc = require("./databaseConnect");
var project;



// var project = [{
//     title: "title",
//     description: "description",
//     languages: "C++"  
//   },
//   {
//     title: "title",
//     description: "description",
//     languages: "C++" 
//   }, 
// {
//   title: "title",
//   description: "description",
//   languages: "C++" 
// },
// {  title: "title",
// description: "description",
// languages: "C++" }];
/* GET home page. */
router.get('/', function(req, res, next) {
  dbc.getProjectData(null, function(err, result){
    if (err) console.log(err);
    else if (result == null) console.log("empty database");
    else{
      console.log("result: "+result);
      res.render('index', {project:result});
    }
  });
  // console.log("-----------");
  // console.log(project);
  // console.log("------------");
  // call back use garna parxa
  // res.render('index', { 
  //   title: 'CodeBuddy', 
  //   project: project
  // });
  
});


module.exports = router;