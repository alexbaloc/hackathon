var express = require('express');
var router = express.Router();

var ethereum = require('../services/ethereum');
var identity = require('../services/identity');
var smartContract = require('../services/smartContract');

router.get('/test', function(req, res) {

    smartContract.create(identity.getByName('cegeka'), identity.getByName('alex'));

    return res.json({message: 'ok'});
  
});

module.exports = router;
