var express = require('express');
var userData = require('./mockData/userInfo.json')

var app = express();
var router = express.Router();

app.use(express.static('public')).listen(8080);

router.get("/getUserInfo", function (req, res) {
    if (!res) return;
    res.json(userData);
    console.log('Get it!');
});

app.use(router);