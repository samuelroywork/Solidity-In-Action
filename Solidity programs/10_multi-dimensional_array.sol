// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract myContract {
    
    uint[4][2] public numbers = [[1,2,4,5], [1,5,2,8]];
    
    function getArray() public view returns(uint[4][2] memory) {
        return numbers;
    }
    
}
