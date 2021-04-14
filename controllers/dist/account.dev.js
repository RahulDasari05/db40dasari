"use strict";

var Account = require('../models/account'); // List of all Account


exports.account_list = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Account.find());

        case 3:
          theAccounts = _context.sent;
          res.send(theAccounts);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.error(500, "{\"error\": ".concat(_context.t0, "}"));

        case 10:
          res.send('NOT IMPLEMENTED: Account list');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.account_view_all_Page = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Account.find());

        case 3:
          theAccounts = _context2.sent;
          res.render('account', {
            title: 'Account Search Results',
            results: theAccounts
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.error(500, "{\"error\": ".concat(_context2.t0, "}"));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Handle a show one view with id specified by query


exports.account_view_one_Page = function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("single view for id " + req.query.id);
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Account.findById(req.query.id));

        case 4:
          result = _context3.sent;
          res.render('accountdetail', {
            title: 'Account Detail',
            toShow: result
          });
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context3.t0, "'}"));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // for a specific Account.


exports.account_detail = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("detail" + req.params.id);
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Account.findById(req.params.id));

        case 4:
          result = _context4.sent;
          res.send(result);
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send("{\"error\": document for id ".concat(req.params.id, " not found"));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle Account create on POST.


exports.account_create_post = function _callee5(req, res) {
  var document, _result;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log(req.body);
          document = new Account();
          document.id = req.body.id;
          document.balance = req.body.balance;
          document.name = req.body.name;
          _context5.prev = 5;
          _context5.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          _result = _context5.sent;
          res.send(_result);
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](5);
          res.error(500, "{\"error\": ".concat(_context5.t0, "}"));

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[5, 12]]);
}; // Handle Account delete form on DELETE.


exports.account_delete = function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log("delete " + req.params.id);
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Account.findByIdAndDelete(req.params.id));

        case 4:
          result = _context6.sent;
          console.log("Removed " + result);
          res.send(result);
          _context6.next = 13;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](1);
          res.status(500);
          res.send("{\"error\": Error deleting ".concat(_context6.t0, "}"));

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; //Handle Account update form on PUT.


exports.account_update_put = function _callee7(req, res) {
  var toUpdate, _result2;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log("update on id ".concat(req.params.id, " with body ").concat(JSON.stringify(req.body)));
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(Account.findById(req.params.id));

        case 4:
          toUpdate = _context7.sent;
          // Do updates of properties
          if (req.body.id) toUpdate.id = req.body.id;
          if (req.body.balance) toUpdate.balance = req.body.balance;
          if (req.body.name) toUpdate.name = req.body.name;
          _context7.next = 10;
          return regeneratorRuntime.awrap(toUpdate.save());

        case 10:
          _result2 = _context7.sent;
          console.log("Sucess " + _result2);
          res.send(_result2);
          _context7.next = 19;
          break;

        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](1);
          res.status(500);
          res.send("{\"error\": ".concat(_context7.t0, ": Update for id ").concat(req.params.id, " failed"));

        case 19:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 15]]);
};