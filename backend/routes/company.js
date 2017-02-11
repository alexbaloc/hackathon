var express = require('express');
var router = express.Router();

var identity = require('../services/identity');
var ethereum = require('../services/ethereum');

router.post('/login', function(req, res) {
    var companyInfo = identity.getByNameAndType(req.body.username, "company");
    if (companyInfo != undefined) {
        ethereum.ensureFunds(companyInfo);

        return res.json(companyInfo);
    }
    return res.status(401).json({message: 'user not recognized'});
  
});

module.exports = router;
