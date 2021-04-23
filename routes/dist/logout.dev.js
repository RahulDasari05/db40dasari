"use strict";

var express = require("express");

var passport = require("passport");

var router = express.Router();

var Account = require("../models/user");

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});