"use strict";
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const sessions = require("client-sessions");
const validator = require('validator');

var app = express();

// Application configuration
const confg = require('./confg/confg');
// Connect to mongodb server
const hdb = require("./handlers/hdb");
// Initialize session
require("./handlers/hsession")( { app, sessions } );
// User authentication
const hauthen = require('./handlers/hauthen')( { express } );

const index = require('./routes/index');
// const authen = require('./routes/authen');
const admin = require('./routes/admin');
// const users = require('./routes/users');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/medicine', {
// // mongoose.connect('mongodb://heroku_pq49qhwc:rprmg9m41hlr1ca42bk0kra25l@ds135547.mlab.com:35547/heroku_pq49qhwc', {
//  	useMongoClient: true
// });
// var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname.replace("app", "") + '/node_modules/bootstrap/dist/')); // redirect bootstrap js and css files
app.use(express.static(__dirname.replace("app", "") + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use(express.static(__dirname.replace("app", "") + '/node_modules/jquery-validation/dist')); // redirect jquery-validation
app.use(express.static(path.join(__dirname, 'plugins/jquery-validation'))); // redirect jquery-validation

// sanitize input data
const sanitize_data = (params) => {
	const raw_data = params.data;
	let sanitized_data = validator.escape(raw_data);
	if(params.no_trim !== undefined) {
		sanitized_data = sanitized_data.trim();
	}
	return sanitized_data;
};

// override method to PUT and DELETE
app.use(methodOverride((req, res) => {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		// look in urlencoded POST bodies and delete it
		const method = sanitize_data({data: req.body._method});
		delete req.body._method;
		return method;
	}
}));

app.use('/', index);
// app.use(hauthen);
// app.use('/authen', authen);
app.use('/admin', admin);
// app.use('/users', users);

console.log("Application running at http://localhost:3000/ ");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
