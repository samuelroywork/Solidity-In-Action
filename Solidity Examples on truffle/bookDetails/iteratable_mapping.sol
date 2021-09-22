// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract testStruct{
   struct Book { 
        uint id;
        string title;
        string author;
   }
   
    mapping(uint => Book) public BookDetails;
    uint bookCount = 0;
    
    function newBook(string memory _title, string memory _author) public {
        BookDetails[bookCount] = Book(bookCount, _title, _author);
        bookCount++;
    }
    
}