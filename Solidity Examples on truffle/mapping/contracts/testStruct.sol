// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract testStruct{
   struct Book { 
        uint id;
        string title;
        string author;
   }
   
    mapping(uint => Book) public BookDetails;
    
    
    function newBook(uint _id, string memory _title, string memory _author) public {
        BookDetails[_id] = Book(_id, _title, _author);
    }
    
}