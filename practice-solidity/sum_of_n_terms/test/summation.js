const summation = artifacts.require("summation");


contract("summation", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance= await summation.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});



contract("Testing the sum of n terms function", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await summation.deployed();
  });

  it("Testing forloop", async function (){
    returned_value=await instance.sum_of_n_terms_forloop(5);      
    assert.equal(15,returned_value);
  });

  it("Testing whileloop", async function (){
    returned_value=await instance.sum_of_n_terms_whileloop(5);      
    assert.equal(15,returned_value);
  });

  it("Testing dowhileloop", async function (){
    returned_value=await instance.sum_of_n_terms_dowhileloop(5);      
    assert.equal(15,returned_value);
  });

});