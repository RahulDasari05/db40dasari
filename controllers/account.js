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


// Handle a show one view with id specified by query
exports.account_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.params.id)
    try{
        result = await Account.findById( req.params.id)

        console.log(result.name)
        res.render('accountdetail', 
{ title: 'Account Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for creating a account.
// No body, no in path parameter, no query.
// Does not need to be async
exports.account_create_Page = async function(req, res) {
    console.log("create view")
    try{
        res.render('accountcreate', { title: 'Account Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle building the view for updating a costume.
// query provides the id
exports.account_update_Page =  async function(req, res) {
    console.log("update view for item "+req.params.id)
    try{
        let result = await Account.findById( req.params.id)
        console.log(result)
        res.render('accountupdate', { title: 'Account Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle a delete one view with id from query
exports.account_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.params.id)
    try{
        result = await Account.findById(req.params.id)
        res.render('accountdelete', { title: 'Account Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




// for a specific Account.
exports.account_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Account.findById(req.params.id)
        res.send(result)
    
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.account_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Account.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
//Handle Account update form on PUT.
exports.account_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Account.findById(req.params.id)
        // Do updates of properties
        if(req.body.id) toUpdate.id = req.body.id;
        if(req.body.balance) toUpdate.balance = req.body.balance;
        if(req.body.name) toUpdate.name = req.body.name;
        let result = await toUpdate.save();      
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};