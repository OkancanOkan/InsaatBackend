// Include MSSQL Driver
var sql = require("mssql");
// Config
const mssqlconfig = require("../../mssqlConfig");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

// METHOD ...Project
exports.getProjectListFunction = function (callback) {
  var FUNCTIONNAME = "getProjectList";

  var sqlStatement = `
		SELECT [ProjectID]
    ,[ProjectName]
    ,[CityID]
    ,[ProjectStatusID]
    ,[CreationDate]
FROM [dbo].[Project]
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          Result: "Failed",
          Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          data: null,
        };
      } else {
        var returnVal = [
          {
            Result: "Success",
            Message: "",
            ProjectsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};


//Flat
exports.getFlatListFunction = function (callback) {
    var FUNCTIONNAME = "getFlatList";
  
    var sqlStatement = `
    SELECT FlatID, FlatNo, p.ProjectName, ft.FlatTypeName, fs.FlatStatusName, f.Price, CONVERT(varchar,f.CreationDate,103) AS CreationDate FROM Flat f LEFT JOIN Project p ON p.ProjectID = f.ProjectID LEFT JOIN FlatType ft ON ft.FlatTypeID = f.FlatTypeID LEFT JOIN FlatStatus fs ON fs.FlatStatusID = f.FlatStatusID ORDER BY FlatNo
          `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              FlatsTable: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };

  //Employee
  exports.getEmployeeListFunction = function (callback) {
    var FUNCTIONNAME = "getEmployeeList";
  
    var sqlStatement = `
    SELECT EmployeeID, EmployeeName, EmployeeSurname, CONVERT(varchar,CreationDate,103) AS CreationDate FROM Employee `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              FlatsTable: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };

//--------------------POST ----------------------------------*/
  //Post Project
  exports.postProjectFunction = function (callback) {
    var FUNCTIONNAME = "postProject";
    var serviceParameters=arguments[1];
    var sqlStatement = `
    INSERT INTO Project (ProjectName,CityID,ProjectStatusID) VALUES ('${serviceParameters.ProjectName}' , '${serviceParameters.CityID}',
  '${serviceParameters.ProjectStatusID}') `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              Project: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };

  // post Flat
  exports.postFlatFunction = function (callback) {
    var FUNCTIONNAME = "postFlat";
    var serviceParameters=arguments[1];
    var sqlStatement = `
    INSERT INTO Flat (FlatNo,ProjectID,FlatTypeID,FlatStatusID,Price) VALUES ('${serviceParameters.FlatNo}' , '${serviceParameters.ProjectID}',
  '${serviceParameters.FlatTypeID}','${serviceParameters.FlatStatusID}','${serviceParameters.Price}') `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              Project: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };

  // post Emloyeee
  exports.postEmployeeFunction = function (callback) {
    var FUNCTIONNAME = "postEmployee";
    var serviceParameters=arguments[1];
    var sqlStatement = `
    INSERT INTO Employee (EmployeeName,EmployeeSurname,Username,Password) VALUES ('${serviceParameters.EmployeeName}' , '${serviceParameters.EmployeeSurname}',
  '${serviceParameters.Username}','${serviceParameters.Password}') `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              Employee: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };

  //------------------------------PUT------------------------------------**************
  //Put Project
  exports.putProjectFunction = function (callback) {
    var FUNCTIONNAME = "putProject";
    var serviceParameters=arguments[1];
    var sqlStatement = `
    UPDATE Project SET ProjectName='${serviceParameters.ProjectName}' , CityID =${serviceParameters.CityID} , ProjectStatusID=${serviceParameters.ProjectStatusID} WHERE ProjectID = ${serviceParameters.ProjectID} `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              Project: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };
  // Put Flat
  exports.putFlatFunction = function (callback) {
    var FUNCTIONNAME = "putFlat";
    var serviceParameters=arguments[1];
    var sqlStatement = `
    UPDATE  Flat SET FlatNo='${serviceParameters.FlatNo}', ProjectID=${serviceParameters.ProjectID},FlatTypeID=${serviceParameters.FlatTypeID},FlatStatusID=${serviceParameters.FlatStatusID},Price=${serviceParameters.Price} WHERE FlatID=${serviceParameters.FlatID} `;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              Flat: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };
  //Put Employee
  exports.putEmployeeFunction = function (callback) {
    var FUNCTIONNAME = "putEmployee";
    var serviceParameters=arguments[1];
    var sqlStatement = `
    UPDATE Employee SET EmployeeName = '${serviceParameters.EmployeeName}', EmployeeSurname = '${serviceParameters.EmployeeSurname}', Username = '${serviceParameters.Username}',
     Password = '${serviceParameters.Password}' WHERE EmployeeID = ${serviceParameters.EmployeeID}`;
  
    console.log(sqlStatement);
  
    // Prepate and Execute the Statment
    const ps = new sql.PreparedStatement(pool);
    ps.prepare(sqlStatement, (err) => {
      // ... error checks
      ps.execute({}, (err, result) => {
        if (err) {
          console.log(err);
          var returnVal = {
            Result: "Failed",
            Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
            data: null,
          };
        } else {
          var returnVal = [
            {
              Result: "Success",
              Message: "",
              Flat: result.recordsets[0],
            },
          ];
        }
  
        callback(null, returnVal);
  
        ps.unprepare((err) => {
          // ... error checks
        });
      });
    });
  };
  //------------DELEETE------------------------------------------------------------------------------------------------
  // //DElete Project
  // exports.deleteProjectFunction = function (callback) {
  //   var FUNCTIONNAME = "deleteProject";
  //   var serviceParameters=arguments[1];
  //   var sqlStatement = `
  //   DELETE FROM Project WHERE ProjectID=${serviceParamaters.ProjectID}`;
  
  //   console.log(sqlStatement);
  
  //   // Prepate and Execute the Statment
  //   const ps = new sql.PreparedStatement(pool);
  //   ps.prepare(sqlStatement, (err) => {
  //     // ... error checks
  //     ps.execute({}, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         var returnVal = {
  //           Result: "Failed",
  //           Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
  //           data: null,
  //         };
  //       } else {
  //         var returnVal = [
  //           {
  //             Result: "Success",
  //             Message: "",
  //             Project: result.recordsets[0],
  //           },
  //         ];
  //       }
  
  //       callback(null, returnVal);
  
  //       ps.unprepare((err) => {
  //         // ... error checks
  //       });
  //     });
  //   });
  // };
  // //delete Flat
  // exports.deleteFlatFunction = function (callback) {
  //   var FUNCTIONNAME = "deleteFlat";
  //   var serviceParameters=arguments[1];
  //   var sqlStatement = `
  //   DELETE From Flat  WHERE FlatID = ${serviceParameters.FlatID}`;
  
  //   console.log(sqlStatement);
  
  //   // Prepate and Execute the Statment
  //   const ps = new sql.PreparedStatement(pool);
  //   ps.prepare(sqlStatement, (err) => {
  //     // ... error checks
  //     ps.execute({}, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         var returnVal = {
  //           Result: "Failed",
  //           Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
  //           data: null,
  //         };
  //       } else {
  //         var returnVal = [
  //           {
  //             Result: "Success",
  //             Message: "",
  //             Flat: result.recordsets[0],
  //           },
  //         ];
  //       }
  
  //       callback(null, returnVal);
  
  //       ps.unprepare((err) => {
  //         // ... error checks
  //       });
  //     });
  //   });
  // };
  // // delete Employee
  // exports.deleteEmployeeFunction = function (callback) {
  //   var FUNCTIONNAME = "deleteEmployee";
  //   var serviceParameters=arguments[1];
  //   var sqlStatement = `
  //   DELETE FROM Employee WHERE EmployeeID = ${serviceParameters.EmployeeID}`;
  
  //   console.log(sqlStatement);
  
  //   // Prepate and Execute the Statment
  //   const ps = new sql.PreparedStatement(pool);
  //   ps.prepare(sqlStatement, (err) => {
  //     // ... error checks
  //     ps.execute({}, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //         var returnVal = {
  //           Result: "Failed",
  //           Message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
  //           data: null,
  //         };
  //       } else {
  //         var returnVal = [
  //           {
  //             Result: "Success",
  //             Message: "",
  //             Employee: result.recordsets[0],
  //           },
  //         ];
  //       }
  
  //       callback(null, returnVal);
  
  //       ps.unprepare((err) => {
  //         // ... error checks
  //       });
  //     });
  //   });
  // };