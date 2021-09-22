// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract newBook{
   struct Book { 
        uint id;
        string title;
        string author;
        Payment paymentDetails;
   }
   
   struct Payment {
       uint id;
       address from; 
       uint amount;
       Bank bankDetails;
   }
   
   struct Bank {
       string name;
       string IFSC;
   }
   
    mapping(uint => Book) public BookDetails;
    
    function newBookEntry(uint _id, string memory _title, string memory _author, uint _amount,
                    string memory _bankName, string memory _IFSC) public {
        BookDetails[_id] = Book(_id, _title, _author, Payment(_id, msg.sender, _amount,Bank(_bankName, _IFSC)));
    }
    
    
    
}