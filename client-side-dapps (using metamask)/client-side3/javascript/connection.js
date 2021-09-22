async function connectToMetamask() {
    result = await ethereum.enable();
    console.log("Account connected", result);
  }

  $(document).ready(function(){
    web3obj=new Web3(ethereum);
    const contractAddress="0xCc6b3040F629cDD6B5b812d80Be74f5E60780c4B";
    const contractABI=
    [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "BookDetails",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "author",
                    "type": "string"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "IFSC",
                                    "type": "string"
                                }
                            ],
                            "internalType": "struct newBook.Bank",
                            "name": "bankDetails",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct newBook.Payment",
                    "name": "paymentDetails",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_author",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bankName",
                    "type": "string"
                }
            ],
            "name": "addAnotherBook",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_author",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_bankName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_IFSC",
                    "type": "string"
                }
            ],
            "name": "newBookEntry",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
        myContractObj=new web3obj.eth.Contract(contractABI,contractAddress);
})
  
async function writedata(){
    BookID=document.getElementById("BookID").value;
    title=document.getElementById("title").value;
    Author=document.getElementById("Author").value;
    amount=document.getElementById("amount").value;
    BankName=document.getElementById("BankName").value;
    IFSC=document.getElementById("IFSC").value;

    txReceipt= await myContractObj.methods.newBookEntry(BookID,title,Author,amount,BankName,IFSC).send({from: ethereum.selectedAddress});
    alert("Data Stored");
}

async function readdata(){
    returnid=document.getElementById("returnid").value;
    result=await myContractObj.methods.BookDetails(returnid).call();
    console.log("Data Value", result);
}