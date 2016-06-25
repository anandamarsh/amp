var express = require('express');
var router = express.Router();
require('./user')(router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
