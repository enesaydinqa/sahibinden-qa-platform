var router = require('express').Router()

const { NodeSSH } = require('node-ssh')
const ssh = new NodeSSH()

router.get('/', function(req, res, next) {
    res.render('ios', { page: 'IOS', menuId: 'IOS' });
});

router.get('/getIosDevices', function(req, res, next) {

    var sshConnect;

    switch (req.query.machineId) {
        case "212":
            sshConnect = ssh.connect({
                host: '10.1.11.212',
                username: 'macmini4',
                password: '1234'
            })
            break;
        case "184":
            sshConnect = ssh.connect({
                host: '10.1.11.184',
                username: 'macmini5',
                password: '1234'
            })
            break;
        case "207":
            sshConnect = ssh.connect({
                host: '10.1.11.207',
                username: 'test',
                password: '1'
            })
            break;
        default:
            console.log("undefined machine")
    }

    sshConnect.then(function() {
        ssh.execCommand('idevice_id -l').then(function(result) {
            var devices = result.stdout.split('\n');
            res.send(devices)
        });
    });
});

module.exports = router;