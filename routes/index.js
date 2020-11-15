var express = require('express');
var mysqlpool = require('../dbconfig');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    mysqlpool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM testbox', function (error, results, fields) {
            connection.release();
            if (error) throw error; 
            res.render('index', { page: 'Testbox', menuId: 'testbox', data: JSON.stringify(results, null, 4)});
        });
    });
});

router.get('/device', function (req, res, next) {
    res.render('device', { page: 'Device Info', menuId: 'device' });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { page: 'Contact Us', menuId: 'contact' });
});

router.post('/testbox/update/:userId', function (req, res) {
    console.log(req.params.userId)
    res.statusCode(200)
});

module.exports = router;
