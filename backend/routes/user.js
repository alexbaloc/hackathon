var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res) {
  if (req.body.username === 'alex') {
    return res.json({ message: 'logged in' });
  }
  return res.status(401).json({ message: 'user not recognized' });

});

module.exports = router;
