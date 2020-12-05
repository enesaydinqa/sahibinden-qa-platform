var router = require('express').Router()
var db_query_execute = require('../dbconnection');

router.get('/', function (req, res, next) { res.render('tags', { page: 'Tags', menuId: 'tags' }); });

router.get('/getTags', function (req, res, next) { db_query_execute('SELECT data_content FROM tags', function (err, rows) { res.send(rows) }); });

module.exports = router;