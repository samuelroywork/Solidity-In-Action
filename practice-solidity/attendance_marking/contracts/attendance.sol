
 // SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract attendance {

 string[3][3] public attendances=[['a','a','a'], ['a','a','a'], ['a','a','a']];

 function setAttendance(uint i, uint j, string memory k) public {
  attendances [i][j]=k;

 }

 function getArray() public view returns(string[3][3] memory) {
        return attendances;
    }


}



