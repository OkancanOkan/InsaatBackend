//Require expressJS Framework
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// Incluede Route Fıles
const contentRoutes = require('./src/routes/ContentRoutes');
const projectRoutes = require ('./src/routes/ProjectRoutes')
const customerRoutes = require ('./src/routes/CustomerRoutes')

//Express Framework
const app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended : true }));

// Start Listening Port 
port = "8090";
var server = app.listen(port, function () {
    console.log('Server is Running ...' );
    console.log(process.env.API_KEY);
});

app.use(bodyParser.urlencoded({extended :false}));

app.use('/',contentRoutes , projectRoutes,customerRoutes);

// catch the Broken links 
app.use(function(reg,res){
    res.status(404).send({url:req.originalUrl + 'not found'})
});