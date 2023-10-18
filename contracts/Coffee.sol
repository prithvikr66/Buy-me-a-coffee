// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract coffee{
    struct Memo{
        string name;
        string message;
        uint256 setAt;
        address fromAddress;
    }

    Memo[] memos;
    address payable owner;
    constructor(){
        owner=payable(msg.sender);
        }

        function buyCoffee(string calldata name, string calldata message)external payable{
            require(msg.value>1e18,"Please pay more than 0.1ETH");
            owner.transfer(msg.value);
            memos.push(Memo(name,message,block.timestamp,msg.sender));

        }
        function getMemos() public view returns(Memo[] memory){
      return memos;
        }
}