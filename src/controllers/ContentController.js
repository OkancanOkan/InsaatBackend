
var Content= require('../dao/Content');

const jwt = require('jsonwebtoken')
let mySecretKey = "acdekxx2x3y4zkkx"

  exports.getCityListFunction = function(req, res) {
     
    Content.getCityListFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.getGenderListFunction = function(req, res) {
     
    Content.getGenderListFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  exports.getIncomeTypeFunction = function(req, res) {
     
    Content.getIncomeTypeFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  exports.getFlatTypeFunction = function(req, res) {
     
    Content.getFlatTypeFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  exports.getProjectStatusFunction = function(req, res) {
     
    Content.getProjectStatusFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.getFlatStatusListFunction = function(req, res) {
     
    Content.getFlatStatusListFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
//*******************************Post */
  exports.postCityFunction = function(req, res) {
     
    Content.postCityFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  exports.postGenderFunction = function(req, res) {
     
    Content.postGenderFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  exports.postIncomeTypeFunction = function(req, res) {
     
    Content.postIncomeTypeFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  exports.postProjectStatusFunction = function(req, res) {
     
    Content.postProjectStatusFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  
  exports.postFlatTypeFunction = function(req, res) {
     
    Content.postFlatTypeFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  //------------------------PUT
  exports.putCityFunction = function(req, res) {
     
    Content.putCityFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putGenderFunction = function(req, res) {
     
    Content.putGenderFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putIncomeTypeFunction = function(req, res) {
     
    Content.putIncomeTypeFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putFlatTypeFunction = function(req, res) {
     
    Content.putFlatTypeFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
  exports.putProjectStatusFunction = function(req, res) {
     
    Content.putProjectStatusFunction(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };
//--------------------DELETE---------------------------

//POST LOGİN
exports.postLoginFunction = function(req, res) {
     
  Content.postLoginFunction(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};




exports.getCityListService = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.getCityListService(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);
};
exports.getGenderListService = function (req, res) {

  const myJwt = req.header['myJwt'] || req.body.myJwt || req.query.myJwt;
  
  Content.getGenderListService(function (err, data) {
  jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
          var returnVal = {
              result: "Failed",
              message: "Authentication Failed",
          }
          res.send(returnVal);                
      } else {
          console.log(decoded)
          res.send(data);
      }
  });
  }, req.body);
};