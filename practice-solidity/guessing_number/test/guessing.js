const guessing = artifacts.require("guessing");

contract("guessing", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance=await guessing.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});


contract("Testing the guessing game", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await guessing.deployed();
  });

  it("Check if guessing game is working", async function (){
    await instance.tryattempt({from: accounts[0], value: 10});
    returned_value = await instance.status.call();      
    assert.equal(returned_value,1);
  });


});
