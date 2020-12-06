var router = require('express').Router()
var db_query_execute = require('../dbconnection');

router.get('/', function(req, res, next) {
    db_query_execute('SELECT * FROM extensions ORDER BY id ASC', function(err, rows) {
        if (err) res.render('error');
        console.log(JSON.parse(JSON.stringify(rows)))
        res.render('extension', { page: 'Extension', menuId: 'extension', data: JSON.parse(JSON.stringify(rows)) });
    });
});

module.exports = router;