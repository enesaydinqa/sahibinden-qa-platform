var express = require('express');
var path = require('path');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var tagsRouter = require('./routes/tags');
var extensionsRouter = require('./routes/extensions');
var iosRouter = require('./routes/ios');
var bodyParser = require('body-parser');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// routes
app.use('/', indexRouter);
app.use('/tags', tagsRouter);
app.use('/extension', extensionsRouter);
app.use('/ios', iosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    res.render('error', { status: err.status, message: err.message });
});

module.exports = app;