var router = require('express').Router()

const { NodeSSH } = require('node-ssh')
const ssh = new NodeSSH()

router.get('/', function(req, res, next) {
    res.render('ios', { page: 'IOS', menuId: 'IOS' });
});

router.get('/getIosDevices', function(req, res, next) {

    var sshConnect = ssh.connect({
        host: '10.1.11.212',
        username: 'macmini4',
        password: '1234'
    })

    sshConnect.then(function() {
        ssh.execCommand('idevice_id -l').then(function(result) {
            var devices = result.stdout.split('\n');
            res.send(devices)
        });
    });
});

module.exports = router;