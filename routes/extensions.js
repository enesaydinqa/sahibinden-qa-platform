var router = require('express').Router()
var db_query_execute = require('../dbconnection');

router.get('/', function (req, res, next) { res.render('extension', { page: 'Extension', menuId: 'extension' }); });


module.exports = router;