var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Web3= require('web3')
const ContractArtifact =require(path.join (__dirname,'build/contracts/certi.json'))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const web3 =new Web3('http://127.0.0.1:8545');

const contractAddress =ContractArtifact.networks['5777'].address;
const contractAbi = ContractArtifact.abi;

TransactionCostAddress="0xC8F29e0c447D7403710DcE7725DfFF3372Db3eAF";

MyContract =new web3.eth.Contract(contractAbi,contractAddress)


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
