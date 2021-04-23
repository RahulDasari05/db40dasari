"use strict";

var express = require("express");

var passport = require("passport");

var router = express.Router();
/* GET Login page. */

router.get("/", function (req, res) {
  res.render("login", {
    title: "Account App Login",
    user: req.user
  });
});
router.post("/", passport.authenticate("local"), function (req, res) {
  res.render("", {
    title: "Account App Login",
    user: req.user
  });
});
module.exports = router;