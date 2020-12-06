var router = require('express').Router()
var db_query_execute = require('../dbconnection');

router.get('/', function(req, res, next) {
    db_query_execute('SELECT * FROM extensions ORDER BY id ASC', function(err, rows) {
        if (err) res.render('error');
        console.log(JSON.parse(JSON.stringify(rows)))
        res.render('extension', { page: 'Extension', menuId: 'extension', data: JSON.parse(JSON.stringify(rows)) });
    });
});

router.post('/save', function(req, res, next) {

    let sql = 'INSERT INTO extensions (name, description, link) VALUES (?, ?, ?);';

    let data = [req.body.name, req.body.description, req.body.link];

    db_query_execute(sql, data, function(err, rows) {
        response = { message: 'Saved Extension', status: 200 };
        res.end(JSON.stringify(response));
    });
});

module.exports = router;