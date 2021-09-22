// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract dynamicArray {
    uint256[] public numbers = [1, 2, 3, 5];

    function insert(uint256 x) public {
        numbers.push(x);
    }

    function remove() public {
        numbers.pop();
    }

    function returnLength() public view returns (uint256) {
        return numbers.length;
    }
}
