

// Include MSSQL Driver
var sql = require("mssql");
// Config
const mssqlconfig = require("../../mssqlConfig");

// JWT
const jwt = require('jsonwebtoken')
let mySecretKey = "acdekxx2x3y4zkkx"

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
    console.log('Connected to SQL server successfully!');
}); 


// METHOD ...City
exports.getCityListFunction = function(callback) {

	var FUNCTIONNAME = "getCityList";

		var sqlStatement = `
		SELECT CityID, CityName  FROM dbo.City
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							CityTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
// Gender
exports.getGenderListFunction = function(callback) {

	var FUNCTIONNAME = "getGenderList";

		var sqlStatement = `
		SELECT GenderID, GenderName,UpdateDate,CreationDate FROM Gender ORDER BY GenderName
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							Gender:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
//Income Type
exports.getIncomeTypeFunction = function(callback) {

	var FUNCTIONNAME = "getIncomeTypeList";

		var sqlStatement = `
		SELECT IncomeTypeID,IncomeTypeName  FROM IncomeType  ORDER BY IncomeTypeName
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							IncomeTypesTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

// Flattype
exports.getFlatTypeFunction = function(callback) {

	var FUNCTIONNAME = "getFlatTypeList";

		var sqlStatement = `
		SELECT FlatTypeID,FlatTypeName FROM dbo.FlatType
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							FlatsTypeTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

//FlatStatus
exports.getFlatStatusListFunction = function(callback) {

	var FUNCTIONNAME = "getFlatStatusList";

		var sqlStatement = `
		SELECT FlatStatusID, FlatStatusName FROM FlatStatus ORDER BY FlatStatusName DESC
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							FlatStatus:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


//ProjectStatus
exports.getProjectStatusFunction = function(callback) {

	var FUNCTIONNAME = "getProjectStatusList";

		var sqlStatement = `
		SELECT ProjectStatusID, ProjectStatusName, CONVERT(varchar, CreationDate, 103) AS 'CreationDate', CONVERT(varchar, UpdateDate, 103) AS 'UpdateDate' FROM ProjectStatus
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							ProjectStatusTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
// ---------------------------------------------------POST'S----------------------------------
// POST CİTY

exports.postCityFunction = function(callback) {

	var FUNCTIONNAME = "postCity";
	var serviceParameters=arguments[1];
		var sqlStatement = `INSERT INTO City (CityName) VALUES ('${serviceParameters.CityName}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							CityTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

//Post Gender
exports.postGenderFunction = function(callback) {

	var FUNCTIONNAME = "postGender";
	var serviceParameters=arguments[1];
		var sqlStatement = `INSERT INTO Gender (GenderName) VALUES ('${serviceParameters.GenderName}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							GenderTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

//post FLATTYPE
exports.postFlatTypeFunction = function(callback) {

	var FUNCTIONNAME = "postFlatType";
	var serviceParameters=arguments[1];
		var sqlStatement = `INSERT INTO FlatType (FlatTypeName) VALUES ('${serviceParameters.FlatTypeName}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							FlatType:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

//post IncomeType

exports.postIncomeTypeFunction = function(callback) {

	var FUNCTIONNAME = "postIncomeType";
	var serviceParameters=arguments[1];
		var sqlStatement = `INSERT INTO IncomeType (IncomeTypeName) VALUES ('${serviceParameters.IncomeTypeName}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							IncomeType:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

//Post ProjectStatus

exports.postProjectStatusFunction = function(callback) {

	var FUNCTIONNAME = "postProjectStatus";
	var serviceParameters=arguments[1];
		var sqlStatement = `INSERT INTO ProjectStatus (ProjectStatusName) VALUES ('${serviceParameters.ProjectStatusName}')`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							ProjectStatus:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


//PUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
exports.putCityFunction = function(callback) {

	var FUNCTIONNAME = "putCityFunction";
	var serviceParameters=arguments[1];
		var sqlStatement = `UPDATE City SET CityName='${serviceParameters.CityName}' WHERE CityID = ${serviceParameters.CityID} `;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							City:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putGenderFunction = function(callback) {

	var FUNCTIONNAME = "putGender";
	var serviceParameters=arguments[1];
		var sqlStatement = `UPDATE Gender SET GenderName='${serviceParameters.GenderName}'  WHERE GenderID = ${serviceParameters.GenderID } `;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin."+err,
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							Gender:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putFlatTypeFunction = function(callback) {

	var FUNCTIONNAME = "putFlatTypeFunction";
	var serviceParameters=arguments[1];
		var sqlStatement = `UPDATE FlatType SET FlatTypeName = '${serviceParameters.FlatTypeName}', UpdateDate = '${serviceParameters.today}' WHERE FlatTypeID = ${serviceParameters.FlatTypeID} `;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							FlatType:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putIncomeTypeFunction = function(callback) {

	var FUNCTIONNAME = "putIncomeTypeFunction";
	var serviceParameters=arguments[1];
		var sqlStatement = `UPDATE IncomeType SET IncomeTypeName='${serviceParameters.IncomeTypeName}' WHERE IncomeTypeID = ${serviceParameters.IncomeTypeID} `;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							IncomeType:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.putProjectStatusFunction = function(callback) {

	var FUNCTIONNAME = "putProjectStatusFunction";
	var serviceParameters=arguments[1];
		var sqlStatement = `UPDATE ProjectStatus SET ProjectStatusName='${serviceParameters.ProjectStatusName}' WHERE ProjectStatusID = ${serviceParameters.ProjectStatusID} `;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							ProjectStatus:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


//POST LOGİN FOR JWT
exports.postLoginFunction = function(callback) {

	var FUNCTIONNAME = "postLogin";
	var serviceParameters=arguments[1];
		var sqlStatement = `SELECT email from Kullanici
		Where email='${serviceParameters.email}'
		AND
		password ='${serviceParameters.password}'`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed / SQL ERROR",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {

						if (result.recordsets[0].length > 0 )
						{
							const myData = {
								emailAddress:serviceParameters.email
							}
							let jwtToken = jwt.sign(myData,mySecretKey,{expiresIn:'1800s'})
							var returnVal = {
								Result:"Success",
								Message:"",
								jwt:jwtToken
							}
						}
						else
						{
							var returnVal = {
								Result:"Fail / Invalid User",
								Message:"",
								jwt:null
						}}



						
						
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


exports.getCityListService = function(callback) {

	var FUNCTIONNAME = "getCityList";

		var sqlStatement = `
		SELECT CityID, CityName  FROM dbo.City
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							CityTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
exports.getGenderListService = function(callback) {

	var FUNCTIONNAME = "getGenderList";

		var sqlStatement = `
		SELECT GenderID, GenderName,UpdateDate,CreationDate FROM Gender ORDER BY GenderName
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = [{
							Result:"Success",
							Message:"",
							GenderTable:result.recordsets[0]
						}]
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};