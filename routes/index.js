var express = require('express');
var mysqlpool = require('../dbconfig');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    mysqlpool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM testbox', function (error, results, fields) {
            connection.release();
            if (error) res.render('error');
            console.log(JSON.stringify(results, null, 4))
            res.render('index', { page: 'Testbox', menuId: 'testbox', name: ['Enes Aydin', 'Tolga Molla', 'Mustafa Ertürk', 'Berivan Göktaş'], data: JSON.stringify(results, null, 4) });
        });
    });
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
    mysqlpool.getConnection(function (err, connection) {
        connection.query('SELECT name_surname FROM qa_user', function (error, results, fields) {
            connection.release();
            var qaUser = [];
            Object.keys(results).forEach(function (key) { qaUser.push(results[key]); });
            qaUser.forEach(item => console.log(item.name_surname))
            res.send(qaUser)
        });
    });
});

module.exports = router;
