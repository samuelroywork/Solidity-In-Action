var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Web3= require('web3')

const HDWalletProvider = require('@truffle/hdwallet-provider');


const infuraKey = "20551b44e7d047fa9c8f42b3032b0b39";
const seedpharse="inside vivid later immense flash survey firm luxury test neutral type reflect";

addressIndex=0;
noOfAddress=1;

const ContractArtifact =require(path.join (__dirname,'build/contracts/Storage.json'))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const provider= new HDWalletProvider(seedpharse, `https://rinkeby.infura.io/v3/${infuraKey}`,addressIndex,noOfAddress);

const web3 =new Web3(provider);

const contractAddress =ContractArtifact.networks['4'].address;
const contractAbi = ContractArtifact.abi;


TransactionCostAddress="0x1de1f318cFa43Baa6c5a133f30A65Ad8d2E2e1E0";

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
