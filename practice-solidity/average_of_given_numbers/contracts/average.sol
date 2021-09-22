// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract average {

function find_average(uint number, uint[] memory a) public pure returns(uint){
    
uint summation=0;
uint total_average=0;

  for (uint i=0;i<number;i++){ 
    summation=summation+a[i];
  }
  total_average=summation/number;
  return total_average;

}


}