const smallest = artifacts.require("smallest");

contract("smallest", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance= await smallest.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});


contract("Testing the smalles function", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await smallest.deployed();
  });

  it("Returns smallest value", async function (){
    returned_value=await instance.find_smallest(20,25);      
    assert.equal(20,returned_value);
  });


});
