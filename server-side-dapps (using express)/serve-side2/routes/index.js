var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setValue', async function(req, res, next) {
 data=req.body;
 Tx= await MyContract.methods.newBookEntry(data.BookID,data.title,data.Author,data.amount,data.BankName,data.ifsc)
 .send({from: TransactionCostAddress,gasLimit: "927000"});
  res.send(Tx);
});

router.post('/viewValue', async function(req, res, next) {
  data1=req.body;
  Tx= await MyContract.methods.BookDetails(data1.returnid).call(); 
  res.send({"Store Value": Tx});
});

module.exports = router;
