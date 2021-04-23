"use strict";

var express = require("express");

var passport = require("passport");

var router = express.Router();

var Account = require("../models/user");

router.get("/", function (req, res) {
  res.render("register", {
    title: "Account App Registration"
  });
});
router.post("/", function (req, res) {
  console.log("request page: " + req.body.username);
  Account.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) {
      return res.render("register", {
        title: "Registration",
        message: "Registration error",
        account: req.body.username
      });
    }

    if (user == {}) {
      return res.render("register", {
        title: "Registration",
        message: "Existing User",
        account: req.body.username
      });
    }

    var newAccount = new Account({
      username: req.body.username,
      password: req.body.password
    });
    console.log(req.body.password);
    Account.register(newAccount, req.body.password, function (err, user) {
      if (err) {
        console.log(err);
        return res.render("register", {
          title: "Registration",
          message: "access error",
          account: req.body.username
        });
      }

      if (!user) {
        return res.render("register", {
          title: "Registration",
          message: "access error",
          account: req.body.username
        });
      }

      console.log("Sucess, redirect");
      res.redirect("/");
    });
  });
});
router.get("/ping", function (req, res) {
  res.status(200).send("pong!");
});
module.exports = router;