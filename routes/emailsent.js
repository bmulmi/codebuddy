var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.post('/', function(req, res, next) {
    var email = "nbhattar@ramapo.edu";
    console.log("Inside Email Sent post");
    console.log(req.body.emailText);

    var fullName = "Shreeja Dhahal";
    var message = req.body.emailText;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hackhersdemo@gmail.com',
            pass: 'CypressF'
        }
    });

    var mailOptions = {
        from: 'hackhersdemo@gmail.com',
        to: email,
        subject: 'Email From Possible Collaborator',
        text: 'Hi, you received a collaborator request from ' + fullName + '. Message: ' + message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send("Email Sent");
        }
    });
});

module.exports = router;
