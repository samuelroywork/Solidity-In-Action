function connectToMetamask(){
    ethereum.enable().then(result=>{
    console.log("Account connected", result)
    });
}

$(document).ready(function(){
    web3obj=new Web3(ethereum);
    const contractAddress="0x068B2803daAcc64242F2677e279BaC36c4f333Da";
    const contractABI=
        [
            {
                "inputs": [],
                "name": "retrieve",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "num",
                        "type": "uint256"
                    }
                ],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    
        myContractObj=new web3obj.eth.Contract(contractABI,contractAddress);
})


async function storeData(){
    value=document.getElementById("dataName").value;

    txReceipt= await myContractObj.methods.store(value).send({from: ethereum.selectedAddress});
    alert("Data Stored");
}

async function getValue(){
    result=await myContractObj.methods.retrieve().call();
    alert("Data Value"+ result);
}