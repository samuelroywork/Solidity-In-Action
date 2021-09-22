const recursive = artifacts.require("recursive");

contract("recursive", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance=await recursive.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});



contract("Testing the recursive factorial function", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await recursive.deployed();
  });

  it("correct factorial value", async function (){
    returned_value=await instance.factorial(5);      
    assert.equal(120,returned_value);
  });


});
