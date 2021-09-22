// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

//Lets the user play the guessing game for 10 tries

contract guessing {

uint number_of_times_attempted=0;

enum PlayerState {
         PLAYER_DID_NOT_GUESS, PLAYER_WON 
    }

PlayerState public status;

modifier CheckAttempts() {
      require(number_of_times_attempted <= 10);
       _;
    }

function random() private view returns (uint) {
    uint randomHash = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    return randomHash % 100;
} 

//uint guess_number= random();
uint guess_number=10;

function tryattempt() public payable CheckAttempts {
  number_of_times_attempted++;

  if (msg.value==guess_number){
    setWon();
  }

  else{
    setNotWon();
  }
}

function setWon() public {
        status = PlayerState.PLAYER_WON;
    }
    
    function setNotWon() public {
        status = PlayerState.PLAYER_DID_NOT_GUESS;
    }


}

