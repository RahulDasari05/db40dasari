var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var account_controller = require('../controllers/account');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Account ROUTES ///
// POST request for creating a Account.
router.post('/resource/accounts', account_controller.account_create_post);
// DELETE request to delete Account.
router.delete('/resource/accounts/:id', account_controller.account_delete);
// PUT request to update Account.
router.put('/resource/accounts/:id', account_controller.account_update_put);
// GET request for one Account.
router.get('/resource/accounts/:id', account_controller.account_detail);
// GET request for list of all Account items.
router.get('/resource/accounts', account_controller.account_list);

/* GET detail costume page */
router.get('/detail', account_controlers.account_view_one_Page);

module.exports = router;