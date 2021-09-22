const staticArray = artifacts.require("staticArray");

contract("Testing staticArray", function (accounts) {
  it("1. Testing Deployement", async function () {
    instance = await staticArray.deployed();
    contractAddr = instance.address;
    assert.isNotNull(instance);
    console.log("Contract Address: ", contractAddr);
  });
});

contract("Functionality Testing", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await staticArray.deployed();
  });

  it("2. Storing Value", async function (){
    await instance.insert(23, 0);
    data = await instance.numbers(0);
    assert.equal(data, 23)
  });

  it("3. Array Size", async function() {
    data = await instance.returnLength();
    assert.equal(data, 8)
  });
});


contract("False Testing (These should be false)", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await staticArray.deployed();
  });

  it("2. Storing Value", async function (){
    await instance.insert(23, 0);
    data = await instance.numbers(0);
    assert.equal(data, 25)
  });

  it("3. Array Size", async function() {
    data = await instance.returnLength();
    assert.equal(data, 2)
  });
});
