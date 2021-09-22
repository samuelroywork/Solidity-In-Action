const newBook = artifacts.require("newBook");

contract("Testing newBook", function (accounts) {
    it("Testing newBook", async function () {
      instance = await newBook.deployed();
      contractAddr = instance.address;
      assert.isNotNull(instance.address);
       console.log("Contract Address: ", contractAddr);
    });
  });


  
contract("Functionality Testing of newBook", function (accounts) {

    let instance = {};
  
    before("Runs before all test", async function(){
      instance = await newBook.deployed();
    });
  
    it("2. Storing Value", async function (){
      //let caller=msg.sender;
      await instance.newBookEntry(101, "Harry Potter and the Philosopher's Stone", "Joanne K Rowling",320,"Canara Bank","06F20");      
      data = await instance.BookDetails(101);
      // assert.equal(data[0].toNumber(), 101);
      assert.equal(data[0].words[0], 101);
      assert.equal(data[1],"Harry Potter and the Philosopher's Stone" );
      assert.equal(data[2],"Joanne K Rowling");
      assert.equal(data[3][2],320);
      assert.equal(data[3][3][0],"Canara Bank");
      assert.equal(data[3][3][1],"06F20");
     // assert.equal(data[3][1],caller);  How to check if msg.sender = address? // 
    });

    it("3. Storing Value", async function (){
      await instance.addAnotherBook(201,"Joanne K Rowling","Canara Bank");      
      data = await instance.BookDetails(201);

      // assert.equal(data[0].toNumber(), 101);
      assert.equal(data[0].words[0], 201);
      assert.equal(data[1],"" );
      assert.equal(data[2],"Joanne K Rowling");
      assert.equal(data[3][0],201);
      //assert.equal(data[3][1],0); Address
      assert.equal(data[3][2],0);
      assert.equal(data[3][3][0],"Canara Bank");
      assert.equal(data[3][3][1],"");
    });
  
  

  });
  