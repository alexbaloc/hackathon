var express = require('express');
var router = express.Router();

var ethereum = require('../services/ethereum');
var identity = require('../services/identity');
var smartContract = require('../services/smartContract');

router.get('/', function(req, res) {
    return res.json(smartContract.getParsedEvents());
});

router.get('/setup', function(req, res) {
    ethereum.ensureFunds(identity.getByName('cegeka'));
    ethereum.ensureFunds(identity.getByName('BMW'));

    return res.json({message: 'funded!'});
});

router.get('/create', function(req, res) {
    var data = {
        startDate: new Date('1-04-2013 12:00:00'),
        salary: 45000,
        franchise: 13500,
        accrual: 1875
    };

    smartContract.create(identity.getByName('cegeka'), identity.getByName('alex'), data);

    return res.json({message: 'ok'});
});

router.get('/close', function(req, res) {
    var date = new Date('12-31-2016 12:00:00');

    smartContract.close(identity.getByName('cegeka'), identity.getByName('alex'), date);

    return res.json({message: 'ok'});
  
});

router.get('/restart', function(req, res) {
    var data = {
        startDate: new Date('1-01-2017 12:00:00'),
        salary: 85000,
        franchise: 13500,
        accrual: 1200
    };

    smartContract.restart(identity.getByName('bmw'), identity.getByName('alex'), data);

    return res.json({message: 'ok'});
});


module.exports = router;
