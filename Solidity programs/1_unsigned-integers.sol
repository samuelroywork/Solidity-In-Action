// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Sample {
    uint public uintNumber = 12; 
    int public intNumber = -23;
    
    function getuintNumber() view public returns(uint) {
        return uintNumber;
    }
}