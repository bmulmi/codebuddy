var express = require('express');
var router = express.Router();

/* GET project page. */
router.get('/', function(req, res, next) {
    console.log("Inside project add get");
    res.render("projectadd");
});

module.exports = router;
