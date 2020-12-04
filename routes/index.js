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

    db_query_execute('SELECT * FROM testbox WHERE testbox_type = "GENERAL" ORDER BY testbox_id ASC', function (err, rows) {
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

router.post('/testbox/update', function (req, res) {

    var testboxNumber = req.body.testbox;
    var testboxUse = req.body.testboxUse;
    var issueNumber = req.body.issueNumber;
    var issueDescription = req.body.issueDescription

    let sql = `UPDATE testbox SET testbox_use = ?, issue = ?, description = ?, in_use = 1 WHERE testbox_id = ?`;

    let data = [req.body.testboxUse, req.body.issueNumber, req.body.issueDescription, req.body.testbox];

    db_query_execute(sql, data, function (err, rows) {
        response = {
            message: 'Successfully',
            status: 200
        };
        res.end(JSON.stringify(response));
    });
});

module.exports = router;
