var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {page: 'Testbox', menuId: 'testbox'});
});

router.get('/device', function (req, res, next) {
    res.render('device', {page: 'Device Info', menuId: 'device'});
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {page: 'Contact Us', menuId: 'contact'});
});

module.exports = router;
