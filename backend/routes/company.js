var express = require('express');
var router = express.Router();
var identity = require('../services/identity');

router.post('/login', function(req, res) {
    if (identity.getByNameAndType(req.body.username, "company") != undefined) {
        return res.json({message: 'logged in'});
    }
    return res.status(401).json({message: 'user not recognized'});
  
});

module.exports = router;
