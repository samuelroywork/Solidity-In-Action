// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract myContract {
    
    function fib(uint n) public returns(uint) {
        if (n <= 1)
            return n;
        return fib(n-1) + fib(n-2);
    }
}