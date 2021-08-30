var express = require('express');
const app = require('..');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Login' });
  });


module.exports = router;
