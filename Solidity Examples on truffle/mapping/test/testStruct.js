const testStruct = artifacts.require("testStruct");

contract("Testing testStruct", function (accounts) {
    it("1. Testing Deployement", async function () {
      instance = await testStruct.deployed();
      contractAddr = instance.address;
      assert.isNotNull(instance.address);
      console.log("Contract Address: ", contractAddr);
    });
  });


  
contract("Functionality Testing of Struct-Mapping", function (accounts) {

    let instance = {};
  
    before("Runs before all test", async function(){
      instance = await testStruct.deployed();
    });
  
    it("2. Storing Value", async function (){
      await instance.newBook(101, "Harry Potter and the Philosopher's Stone", "Joanne K Rowling");      
      data = await instance.BookDetails(101);

      // assert.equal(data[0].toNumber(), 101);
      assert.equal(data[0].words[0], 101);
      assert.equal(data[1],"Harry Potter and the Philosopher's Stone" );
      assert.equal(data[2],"Joanne K Rowling");
    });
  

  });
  