var express = require('express');
var router = express.Router();

var ethereum = require('../services/ethereum');
var identity = require('../services/identity');
var smartContract = require('../services/smartContract');
var params = require('../services/params');

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

router.get('/close/:actionId', function(req, res) {
    var actionData = params.getAt(req.params.actionId || 1);

    var company = actionData.company;
    var date = actionData.data;

    smartContract.close(identity.getByName(company), identity.getByName('alex'), date);

    return res.json({message: 'ok'});
  
});

router.get('/restart/:actionId', function(req, res) {
    var actionData = params.getAt(req.params.actionId);

    var company = actionData.company;
    var data = actionData.data;

    smartContract.restart(identity.getByName(company), identity.getByName('alex'), data);

    return res.json({message: 'ok'});
});


module.exports = router;
