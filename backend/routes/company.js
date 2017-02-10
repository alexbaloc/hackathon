var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
    if (req.body.username === 'cegeka') {
        return res.json({message: 'logged in'});
    }
    return res.status(401).json({message: 'user not recognized'});
  
});

module.exports = router;
