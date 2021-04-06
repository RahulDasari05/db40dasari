var Account = require('../models/account');
// List of all Account
exports.account_list = async function(req, res) {
    try{
        theAccounts = await Account.find();
        res.send(theAccounts);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }

 res.send('NOT IMPLEMENTED: Account list');
};


exports.account_view_all_Page = async function(req, res) {
    try{
    theAccounts = await Account.find();
    res.render('account', { title: 'Account Search Results', results: theAccounts });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };


// for a specific Account.
exports.account_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Account detail: ' + req.params.id);
};
// Handle Account create on POST.
exports.account_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Account();
    document.id = req.body.id;
    document.balance = req.body.balance;
    document.name = req.body.name;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
// Handle Account delete form on DELETE.
exports.account_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Account delete DELETE ' + req.params.id);
};
// Handle Account update form on PUT.
exports.account_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Account update PUT' + req.params.id);
   };