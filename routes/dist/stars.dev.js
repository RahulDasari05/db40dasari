"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  var query = req.query;
  console.log("rows ".concat(query.rows));
  console.log("rows ".concat(query.cols));
  res.render('stars', {
    title: 'Stars',
    query: query
  });
});
module.exports = router;