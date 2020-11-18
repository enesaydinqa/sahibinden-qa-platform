var express = require('express');
var dbConnection = require('../dbconfig');
var router = express.Router();

var con = dbConnection();

async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}

/* GET home page. */
router.get('/', async function (req, res, next) {

    var testboxInfo;
    var qaUsers = [];

    con.connect(function (err, connection) {
        con.query('SELECT * FROM testbox', function (error, results, fields) {
            if (error) res.render('error');
            console.log(JSON.stringify(results, null, 4))
            testboxInfo = results;
        }); 
    });

    con.connect(function (err, connection) {
        con.query('SELECT name_surname FROM qa_user', function (error, results, fields) {
            if (error) res.render('error');
            Object.keys(results).forEach(function (key) { qaUsers.push(results[key]); });
        });
    });

    await wait(2000);

    res.render('index', { page: 'Testbox', menuId: 'testbox', name: qaUsers, data: JSON.stringify(testboxInfo, null, 4) });
});

router.get('/device', function (req, res, next) {
    res.render('device', { page: 'Device Info', menuId: 'device' });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { page: 'Contact Us', menuId: 'contact' });
});

router.get('/error', function (req, res, next) {
    res.render('error');
});

router.post('/testbox/update/:userId', function (req, res) {
    console.log(req.params.userId)
    res.statusCode(200)
});

router.get('/getQAUsers', function (req, res, next) {
    con.connect(function (err, connection) {
        con.query('SELECT name_surname FROM qa_user', function (error, results, fields) {
            var qaUser = [];
            Object.keys(results).forEach(function (key) { qaUser.push(results[key]); });
            qaUser.forEach(item => console.log(item.name_surname))
            res.send(qaUser)
        });
    });
});

module.exports = router;
