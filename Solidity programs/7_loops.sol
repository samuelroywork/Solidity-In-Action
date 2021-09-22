// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract myContract {
    
    function factorial(uint num) public pure returns(uint fact){
        uint f = 1;
        for(uint i = 1; i <= num; i++) {
            f = f * i; 
        }
        fact = f;
    }
    
    function sumofdigit(uint num) public pure returns(uint s){
       uint remainder;
       uint sum;
       while(num > 0){
           remainder = num % 10;
           sum += remainder;
           num = num / 10;
       }
       s = sum;
    }
    
    function dosumofdigit(uint num) public pure returns(uint s){
       uint remainder;
       uint sum;
       do
       {
           remainder = num % 10;
           sum += remainder;
           num = num / 10;
       } while(num > 0);
       s = sum;
    }
    
}