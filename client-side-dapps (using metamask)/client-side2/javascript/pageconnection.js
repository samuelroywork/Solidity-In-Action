async function connectToMetamask() {
  result = await ethereum.enable();
  console.log("Account connected", result);
}


$(document).ready(function(){
    web3obj=new Web3(ethereum);
    const contractAddress="0x9d3055Bd655e8D1700a50F5df3324cc9bf8fF91D";
    const contractABI=
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "certificateDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificateID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                }
            ],
            "name": "newCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
        myContractObj=new web3obj.eth.Contract(contractABI,contractAddress);
})



async function writedata(){
    certID=document.getElementById("certID").value;
    course=document.getElementById("course").value;
    name1=document.getElementById("name").value;
    grade=document.getElementById("grade").value;
    date=document.getElementById("date").value;

    txReceipt= await myContractObj.methods.newCertificate(certID,course,name1,grade,date).send({from: ethereum.selectedAddress});
    alert("Data Stored");
}

async function readdata(){
    certID1=document.getElementById("returnid").value;
    result=await myContractObj.methods.certificateDetails(certID1).call();
    console.log("Data Value", result);
}