var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('place/intro', { title: 'place/intro', menu: 'place' });
});

router.get('/place/search', function(req, res, next) {
  res.render('place/search', { title: 'place/search' });
});

router.get('/place/main', function(req, res, next) {
  res.render('place/main', { title: 'place/main' });
});


module.exports = router;
