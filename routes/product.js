var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Product' });
  });

router.get('/gg', function(req, res, next) {
  res.send('Product page');
});

module.exports = router;
