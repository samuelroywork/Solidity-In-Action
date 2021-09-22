// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract bank_application {
    
     address public owner;
    
constructor(){
      owner=msg.sender;
}    
    
  
enum AccountType
{
    CurrentAccount, SavingsAccount
}

enum AccountStatus {
        Application_sent, Account_Active,Account_Denied, Account_closed
    }

struct Account_holder{
    uint customerNumber;
    address payable accountAddress;
    string firstName;
    string lastName;
    string Address;
    string DOB;
    uint phoneNumber;
    string PANcard;
    AccountType account;
    AccountStatus status;

}

modifier Status(AccountStatus v,uint _customerNumber) {
        require(Account_holder_details[_customerNumber].status == v);
        _;
    }

modifier onlyOwner(){
    require(msg.sender == owner);
    _;
}


mapping (uint=> Account_holder) public Account_holder_details;

function apply_for_account(uint _customerNumber, string memory _firstName, string memory _lastName, 
string memory _Address, string memory _DOB, uint _phoneNumber, string memory _PANcard,AccountType _account 
) public {
    Account_holder_details[_customerNumber].customerNumber=_customerNumber;
    Account_holder_details[_customerNumber].firstName=_firstName;
    Account_holder_details[_customerNumber].lastName=_lastName;
    Account_holder_details[_customerNumber].Address=_Address;
    Account_holder_details[_customerNumber].DOB=_DOB;
    Account_holder_details[_customerNumber].phoneNumber=_phoneNumber;
    Account_holder_details[_customerNumber].PANcard=_PANcard;
    Account_holder_details[_customerNumber].account=_account;
    Account_holder_details[_customerNumber].status=AccountStatus.Application_sent;
}

function Approve_account(uint _customerNumber,address payable _accountAddress)public Status(AccountStatus.Application_sent,_customerNumber) onlyOwner{
    Account_holder_details[_customerNumber].accountAddress=_accountAddress;
    Account_holder_details[_customerNumber].status=AccountStatus.Account_Active;
    
}

function Denied_account(uint _customerNumber ) public Status(AccountStatus.Application_sent,_customerNumber) onlyOwner {
    Account_holder_details[_customerNumber].status=AccountStatus.Account_Denied;
}


function Closed_account(uint _customerNumber ) public Status(AccountStatus.Account_Active,_customerNumber) onlyOwner {
    Account_holder_details[_customerNumber].status=AccountStatus.Account_closed;
}


function Transfer( address payable _accountAddress ) public payable{
    uint256 amount = msg.value;
    _accountAddress.transfer(amount);

}



}