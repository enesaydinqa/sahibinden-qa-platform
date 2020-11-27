var express = require('express');
var db_query_execute = require('../dbconnection');
var router = express.Router();

async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}

/* GET home page. */
router.get('/', async function (req, res, next) {

    var testboxInfo;
    var qaUsers = [];

    db_query_execute('SELECT * FROM testbox WHERE testbox_type = "GENERAL"', function (err, rows) {
        if (err) res.render('error');
        testboxInfo = rows;
    });

    db_query_execute('SELECT name_surname FROM qa_user', function (err, rows) {
        if (err) res.render('error');
        Object.keys(rows).forEach(function (key) { qaUsers.push(rows[key]); });
    });

    await wait(2000);

    res.render('index', { page: 'Testbox', menuId: 'testbox', name: qaUsers, data: testboxInfo });
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

router.get('/tags', function (req, res, next) {
    db_query_execute('SELECT data_content FROM tags', function (err, rows) {
        if (err) res.render('error');
        console.log(rows)
        res.render('tags', { page: 'Tags', menuId: 'tags', tagData: JSON.stringify(rows[0], null, 4) });
    });
});



router.get('/getTags', function (req, res, next) {
    db_query_execute('SELECT data_content FROM tags', function (err, rows) {
        res.send(rows)
    });
});

router.post('/testbox/update/:userId', function (req, res) {
    console.log(req.params.userId)
    res.statusCode(200)
});

module.exports = router;
