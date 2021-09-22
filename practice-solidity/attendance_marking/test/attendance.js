const attendance = artifacts.require("attendance");

contract("attendance", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance=await attendance.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});



contract("Testing attendance function", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await attendance.deployed();
  });

  it("Testing set attendance", async function (){
   await instance.setAttendance(1,1,'p');  
   returned_value=await instance.attendances(1,1);
    assert.equal('p',returned_value);
  });

  
});