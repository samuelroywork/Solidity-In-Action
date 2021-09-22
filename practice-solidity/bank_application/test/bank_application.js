const bank_application = artifacts.require("bank_application");

contract("bank_application", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance= await bank_application.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});


contract("Testing the bank application ", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await bank_application.deployed();
  });

  it("Testing account application", async function (){
    await instance.apply_for_account(101,"Samuel","Roy","RAK","21061945",9458941,"abc123",1);      
    data=await instance.Account_holder_details(101);
    assert.equal(data[0],101);
    assert.equal(data[2],"Samuel");
    assert.equal(data[3],"Roy");
    assert.equal(data[4],"RAK");
    assert.equal(data[5],"21061945");
    assert.equal(data[6],9458941);
    assert.equal(data[7],"abc123");
    assert.equal(data[8],1);
    
  });


});





