
var Customer= require('../dao/Customer');

exports.getCustomerListFunction = function(req, res) {
   
  Customer.getCustomerListFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
exports.getVisitListFunction = function(req, res) {
   
  Customer.getVisitListFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.getSalesListFunction = function(req, res) {
   
  Customer.getSalesListFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
//---------------POSTTT-----------------
exports.postCustomerFunction = function(req, res) {
   
  Customer.postCustomerFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.postVisitFunction = function(req, res) {
   
  Customer.postVisitFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.postSalesFunction = function(req, res) {
   
  Customer.postSalesFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
//PUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
exports.putCustomerFunction = function(req, res) {
   
  Customer.putCustomerFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.putVisitFunction = function(req, res) {
   
  Customer.putVisitFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
exports.putSalesFunction = function(req, res) {
   
  Customer.putSalesFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
//-----------DELETE 
exports.deleteCustomerFunction = function(req, res) {
   
  Customer.deleteCustomerFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.deleteVisitFunction = function(req, res) {
   
  Customer.deleteVisitFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.deleteSalesFunction = function(req, res) {
   
  Customer.deleteSalesFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};










