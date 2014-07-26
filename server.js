// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var logger   = require('morgan');                       //get the logger middleware
var bodyParser = require('body-parser');                //get the body parser middleware
var methodOverride = require('method-override');        //get the method override middleware
var mongoose = require('mongoose'); 					// mongoose for mongodb
var database = require('./config/database');			//load the db config
var port = process.env.PORT || 8080;					//set the port

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io


app.use(express.static(__dirname + '/public')); 	   // set the static files location /public/img will be /img for users
app.use(logger('dev')); 					           // log every request to the console
app.use(bodyParser()); 						           // pull information from html in POST
app.use(methodOverride()); 						       // simulate DELETE and PUT

// routes ======================================================================
require('./app/routes')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);