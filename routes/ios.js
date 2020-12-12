var router = require('express').Router()
var db_query_execute = require('../dbconnection');

router.get('/', function(req, res, next) {
    res.render('ios', { page: 'IOS', menuId: 'IOS' });
});

<<<<<<< Updated upstream
router.post('/getDeviceBase64', async function(req, res, next) {
    console.log(req.body.uid)
    await res.send("test")
=======
router.post('/getDeviceImage', function(req, res, next) {
    let sql = 'SELECT base64 FROM phones WHERE uid = ?';
    let data = [req.body.uid];

    db_query_execute(sql, data, function(err, rows) {
        response = { base64: rows[0].base64, status: 200 };
        res.end(JSON.stringify(response));
    });
>>>>>>> Stashed changes
});

module.exports = router;