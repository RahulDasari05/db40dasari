"use strict";

var mongoose = require("mongoose");

var accountSchema = mongoose.Schema({
  name: String,
  id: String,
  balance: Number
}); // plugin for passport-local-mongoose

module.exports = mongoose.model("Account", accountSchema);