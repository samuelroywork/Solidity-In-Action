const dynamicArray = artifacts.require("dynamicArray");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Testing dynamicArray", function (accounts) {
  it("1. Testing Deployement", async function () {
    instance = await dynamicArray.deployed();
    contractAddr = instance.address;
    assert.isNotNull(instance);
    console.log("Contract Address: ", contractAddr);
  });
});

contract("Testing functionality", function(accounts){
  it("2. Testing insert function ", async function(){
    instance = await dynamicArray.deployed();
    await instance.insert(23);
    data = await instance.numbers(4);
    assert.equal(data,23); 
  });

  it("3. Array size insert test ", async function(){
    instance = await dynamicArray.deployed();
    await instance.insert(23);
    arrayLength=await instance.returnLength();
    data = await instance.numbers(arrayLength-1);
    assert.equal(data,23); 
  });
})