var express = require('express');
var router = express.Router();

var ethereum = require('../services/ethereum');
var identity = require('../services/identity');
var smartContract = require('../services/smartContract');

router.get('/', function(req, res) {
    //return res.json(placeholder.getAllEvents());
    return res.json(smartContract.getParsedEvents());
});

router.get('/create', function(req, res) {
    var company = identity.getByName('cegeka');
    ethereum.ensureFunds(company);

    smartContract.create(company, identity.getByName('alex'));

    return res.json({message: 'ok'});
});

router.get('/close', function(req, res) {

    smartContract.close(identity.getByName('cegeka'), identity.getByName('alex'));

    return res.json({message: 'ok'});
  
});

module.exports = router;
