var express = require('express');
var router = express.Router();
var dbc = require('./databaseConnect');
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("Inside publish post");

    var projectInfo = {
        fullName : req.body.fullName,
        email: req.body.email,
        projectName: req.body.projectName,
        projectCategory: req.body.projectCategory,
        projectDescription: req.body.projectDescription,
        languages: req.body.languages,
        frameworks: req.body.frameworks
    }
    console.log("Inside publish post");
    console.log(projectInfo);
    dbc.setProjectData(projectInfo);
    
    res.redirect("/");
    
    
});

module.exports = router;
