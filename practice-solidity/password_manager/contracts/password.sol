// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract password {

 string public masterPassword="abcd1234";

struct Credentials{
  string websiteName;
  string url;
  string userName;
  string password;
  
}

mapping (string =>Credentials) public credentialMapping;
 
 function addCredentials(string memory _masterPassword,string memory _websiteName, string memory _url, string memory _userName, string memory _password) public{

   if (keccak256(abi.encodePacked(_masterPassword)) == keccak256(abi.encodePacked(masterPassword))){

     credentialMapping[_websiteName]=Credentials(_websiteName,_url,_userName,_password);

   }

   else{
     revert("Wrong Master Password");

   }

 }
 
  
 function retrieveCredentials(string memory _masterPassword,string memory _websiteName ) public view returns(string memory websiteName, string memory url, string memory userName, string memory password){

   if (keccak256(abi.encodePacked(_masterPassword)) == keccak256(abi.encodePacked(masterPassword))){

     Credentials memory p = credentialMapping[_websiteName];
     return (p.websiteName, p.url, p.userName, p.password);

   }

   else{
     revert("Wrong Master Password");

   }

 }

 
}
