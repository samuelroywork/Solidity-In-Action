// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract staticArray {
    uint[8] public numbers = [1, 2];
    
    function insert(uint value, uint index) public {
        numbers[index] = value;
    }
    
    function returnLength() view public returns(uint) {
        return numbers.length;
    }
}
