var express = require('express');
var router = express.Router();


var dbc = require("./databaseConnect");

// router.get('/', function(req, res, next) {
//   res.send("get data route working");
//     // dbc.setProjectData();
//     // dbc.getProjectData();
//     dbc.getUserData();
// });


router.post('/', function(req,res,next){
    var data = req.body.id;
    data = JSON.parse(data);
    /*dbc.getProjectDetails(null, function(err, result){
      if (err) console.log(err);
      else if (result == null) console.log("empty database");
      else{
        console.log("result: "+result);
        //   res.render('index', {project:result});
        res.send("got ");
      }*/
      
    res.render('singleproject', {detail:data});
    //res.send("getdata post route working");
//});
});

module.exports = router;
