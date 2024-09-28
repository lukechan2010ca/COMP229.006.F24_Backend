var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/luke', function(req, res, next) {
  res.send('Due li');
});

module.exports = router;
