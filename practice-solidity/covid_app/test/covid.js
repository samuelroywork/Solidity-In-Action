const covid = artifacts.require("covid");


contract("covid", function (/* accounts */) {
  it("1. Testing contract deployed", async function () {
    instance= await covid.deployed();
    contractAddress=instance.address;
    assert.isNotNull(contractAddress);
    console.log("Contract Address", contractAddress);
  });
});


contract("Testing the Covid application", function (accounts) {

  let instance = {};

  before("Runs before all test", async function(){
    instance = await covid.deployed();
  });
  
  it("Testing Registration", async function (){
    await instance.Registration(101,"Samuel",954858,"RAK");      
    data=await instance.vaccinationsDetails(101);
    assert.equal(data[0],101);
    assert.equal(data[1][1],"Samuel");
    assert.equal(data[1][2],954858);
    assert.equal(data[1][3],"RAK");
    assert.equal(data[2],0);
  });

 
  it("Testing FirstVaccine ", async function (){
    await instance.FirstVaccine(101,"21052021","Covaxin",121,33);      
    data1=await instance.vaccinationsDetails(101);
    assert.equal(data1[3],"21052021");
    assert.equal(data1[4],"Covaxin");
    assert.equal(data1[6][1],121);
    assert.equal(data1[7][1],33);
    assert.equal(data1[2],1);
  });



  it("Testing SecondVaccine ", async function (){
    await instance.SecondVaccine(101,"29052021");      
    data2=await instance.vaccinationsDetails(101);
    assert.equal(data2[5],"29052021");
    assert.equal(data2[2],2);
  });

});