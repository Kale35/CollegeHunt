const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();

// database connection setup 
const uri = "mongodb+srv://hunter:IKXsdPLHpzBw1YFz@sandbox.u7ruw.mongodb.net/collegehunt?retryWrites=true&w=majority";
mongoose.connect(uri, {  
  useNewUrlParser: true,  
  useUnifiedTopology: true}).then(() => { 
    console.log('MongoDB Connected')
  }).catch(err => console.log(err));

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(8080);
module.exports = app;
