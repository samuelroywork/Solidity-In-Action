// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

contract EnuDataType{
    
    enum TraficLights {Red, Green, Yellow}
    
    TraficLights public Choice;
    
    function setRed() public {
        Choice = TraficLights.Red;
    }
    
    function setGreen() public {
        Choice = TraficLights.Green;
    }
    
    function setYellow() public {
        Choice = TraficLights.Yellow;
    }

}