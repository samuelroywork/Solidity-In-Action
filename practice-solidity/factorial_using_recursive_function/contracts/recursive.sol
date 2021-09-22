// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract recursive {
  
   function factorial(uint y)public view returns(uint){
        if (y == 1)
            return y;
        return y * factorial(y-1);
        
    }


}


