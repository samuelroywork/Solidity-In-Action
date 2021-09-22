// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract myContract {
    
    function largest(uint a, uint b) public pure returns(uint max){
        max = (a>b) ? a : b;
    }
    
}