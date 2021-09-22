const password = artifacts.require("password");

contract("password", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance= await password.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});


contract("Testing the Adding and Retreiving Credentials ", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await password.deployed();
  });

  it("Adding and Retreiving Credentials", async function (){
    await instance.addCredentials("abcd1234", "google", "www.google.com","samuel","abc123");      
    data = await instance.retrieveCredentials("abcd1234","google");
    assert.equal(data[0],"google");
    assert.equal(data[1],"www.google.com" );
    assert.equal(data[2],"samuel");
    assert.equal(data[3],"abc123");
  });


});
