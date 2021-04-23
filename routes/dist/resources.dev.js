"use strict";

var express = require("express");

var router = express.Router();

var passport = require('passport'); // Require controller modules.


var api_controller = require("../controllers/api");

var account_controller = require("../controllers/account"); /// API ROUTE ///
// GET resources base.


router.get("/", api_controller.api); /// Account ROUTES ///
// POST request for creating a Account.

router.post("/accounts", account_controller.account_create_post); // DELETE request to delete Account.

router["delete"]("/accounts/:id", account_controller.account_delete); // PUT request to update Account.

router.put("/accounts/:id", account_controller.account_update_put); // GET request for one Account.

router.get("/accounts/:id", account_controller.account_detail); // GET request for list of all Account items.

router.get("/accounts", account_controller.account_list);
/* GET detail account page */

router.get("/detail/:id", account_controller.account_view_one_Page);
/* GET create account page */

router.get("/create", account_controller.account_create_Page);
/* GET create update page */

router.get('/update/:id', passport.authenticate('local', account_controller.account_update_Page));
/* GET create account page */

router.get("/delete/:id", account_controller.account_delete_Page);
module.exports = router;