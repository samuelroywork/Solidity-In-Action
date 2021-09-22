// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract summation {

function sum_of_n_terms_forloop(uint n) public pure returns(uint sum){
  uint s=0;
  for (uint i=1; i<=n; i++){
    s=s+i;
    }
  sum=s;
}

function sum_of_n_terms_whileloop(uint n) public pure returns(uint sum){
      uint s=0;
      uint i=1;
      while(i <=n ){
          s=s+i;
          i=i+1;
      }
      sum = s;
    }
    
function sum_of_n_terms_dowhileloop(uint n) public pure returns(uint sum){
      uint s=0;
      uint i=1;
      do{
          s=s+i;
          i=i+1;
      } while(i<=n);
      sum=s;
    }
}