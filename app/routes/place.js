var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('place/intro', { title: 'place/intro', menu: 'place' });
});

router.get('/place/search', function(req, res, next) {
  res.render('place/search', { title: 'place/search' });
});


module.exports = router;
