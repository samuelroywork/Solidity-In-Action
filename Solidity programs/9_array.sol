// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract myContract {
    
    uint[4] public numbers = [1,2,4,5];
    
    function setValue(uint value, uint index) public {
        numbers[index] = value;
    }
    
    function getVlaue(uint index) public view returns (uint) {
        return numbers[index];
    }
    
    function getArray() public view returns(uint[4] memory) {
        return numbers;
    }
    
}
