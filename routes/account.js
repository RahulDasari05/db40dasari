var express = require('express');
const account_controllers= require('../controllers/account');
var router = express.Router();
/* GET costumes */
router.get('/', account_controllers.account_view_all_Page);


module.exports = router;
