var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setValue', async function(req, res, next) {
  data=req.body;
  Tx= await MyContract.methods.store(data.dataValue).send({from:TransactionCostAddress});
  res.send(Tx);
});

router.get('/viewValue', async function(req, res, next) {
  Tx= await MyContract.methods.retrieve().call();
  res.send({"Store Value": Tx});
});

module.exports = router;
