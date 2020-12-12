var router = require('express').Router()
var db_query_execute = require('../dbconnection');

router.get('/', function(req, res, next) {
    res.render('ios', { page: 'IOS', menuId: 'IOS' });
});

router.post('/getDeviceImage', function(req, res, next) {
    let sql = 'SELECT base64 FROM phones WHERE uid = ?';
    let data = [req.body.uid];

    db_query_execute(sql, data, function(err, rows) {
        response = { base64: rows[0].base64, status: 200 };
        res.end(JSON.stringify(response));
    });
});

module.exports = router;