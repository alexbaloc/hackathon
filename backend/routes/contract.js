var express = require('express');
var router = express.Router();

var ethereum = require('../services/ethereum');
var smartContract = require('../services/smartContract');

router.get('/test', function(req, res) {

    smartContract.create();

    return res.json({message: 'ok'});
  
});

module.exports = router;
