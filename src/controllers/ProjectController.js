
var Project= require('../dao/Project');

exports.getProjectListFunction = function(req, res) {
   
    Project.getProjectListFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
exports.getFlatListFunction = function(req, res) {
   
    Project.getFlatListFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

exports.getEmployeeListFunction = function(req, res) {
   
    Project.getEmployeeListFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};
exports.getFlatStatusFunction = function(req, res) {
   
  Project.getFlatStatusFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};

//POSt Project 
exports.postProjectFunction = function(req, res) {
   
  Project.postProjectFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};

//post Flat
exports.postFlatFunction = function(req, res) {
   
  Project.postFlatFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};

//post Employeee
exports.postEmployeeFunction = function(req, res) {
   
  Project.postEmployeeFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};

//--------------PUT
//put Project
exports.putProjectFunction = function(req, res) {
   
  Project.putProjectFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};
//put Flat
exports.putFlatFunction = function(req, res) {
   
  Project.putFlatFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};
// put Employee
exports.putEmployeeFunction = function(req, res) {
   
  Project.putEmployeeFunction(function(err, data){
    if( err ) console.log(err);
    else res.send(data);
  }, req.body);
};
//------------------------DELETE
// //DElete PRoject
// exports.deleteProjectFunction = function(req, res) {
   
//   Project.deleteProjectFunction(function(err, data){
//     if( err ) console.log(err);
//     else res.send(data);
//   }, req.body);
// };
// // Delete Flat 
// exports.deleteFlatFunction = function(req, res) {
   
//   Project.deleteFlatFunction(function(err, data){
//     if( err ) console.log(err);
//     else res.send(data);
//   }, req.body);
// };

// delete Employee
// exports.deleteEmployeeFunction = function(req, res) {
   
//   Project.deleteEmployeeFunction(function(err, data){
//     if( err ) console.log(err);
//     else res.send(data);
//   }, req.body);
// };













