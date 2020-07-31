var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('profile/login', { title: 'profile/login', menu: 'profile' });
});

module.exports = router;
