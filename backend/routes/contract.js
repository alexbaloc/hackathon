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
    ethereum.ensureFunds(identity.getByName('kpmg'));

    //also pre-compile the contract code to speed up next operations
    smartContract.cacheABI();

    return res.json({message: 'funded!'});
});

router.post('/create', function(req, res) {
    var data = {
        //input is in milliseconds => convert it to a date
        //apparently we must add at least one hour, otherwise the DST turns it into 23:00:00 the previous day
        startDate: new Date(req.body.startDate + 1000*60*60*3),
        salary: req.body.salary,
        franchise: req.body.franchise,
        accrual: Math.ceil(req.body.accrual * 1000)
    };

    if (!smartContract.isContractCreated()) {
        smartContract.create(identity.getByName(req.body.company), identity.getUser(), data);
    } else {
        smartContract.restart(identity.getByName(req.body.company), identity.getUser(), data);
    }
    return res.json({message: 'ok'});
});

router.post('/close', function(req, res) {
    var company = req.body.company;
    var date = req.body.date;

    smartContract.close(identity.getByName(company), identity.getUser(), date);

    return res.json({message: 'ok'});
  
});

router.post('/restart', function(req, res) {
    var actionData = params.getAt(req.params.actionId);

    var company = req.body.company;
    var data = {
        startDate: req.body.startDate,
        salary: req.body.salary,
        franchise: req.body.franchise,
        accrual: req.body.accrual
    };
    smartContract.restart(identity.getByName(company), identity.getUser(), data);

    return res.json({message: 'ok'});
});


module.exports = router;
