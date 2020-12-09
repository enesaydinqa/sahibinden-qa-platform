var router = require('express').Router()

router.get('/', function(req, res, next) {
    res.render('ios', { page: 'IOS', menuId: 'IOS' });
});

module.exports = router;