var router = require('express').Router()

router.get('/', function(req, res, next) {
    res.render('ios', { page: 'IOS', menuId: 'IOS' });
});

router.post('/getDeviceBase64', async function(req, res, next) {
    console.log(req.body.uid)
    await res.send("test")
});

module.exports = router;