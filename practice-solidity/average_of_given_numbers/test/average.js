const average = artifacts.require("average");

contract("average", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance= await average.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});


contract("Testing the average function", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await average.deployed();
  });

  it("Testing Average", async function (){
    returned_value=await instance.find_average(2, [10,20]);      
    assert.equal(15,returned_value);
  });

});