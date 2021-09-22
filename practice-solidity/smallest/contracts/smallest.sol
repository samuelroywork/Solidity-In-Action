// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract smallest {

 function find_smallest(uint a, uint b) public pure returns (uint min)
    {
        min= (a<b)? a : b;

    }
    
}
