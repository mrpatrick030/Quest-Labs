// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "../lib/openzeppelin-contracts/contracts/utils/Counters.sol";
import "./QuestToken.sol";
contract QuestNFT is ERC721 {
   using Counters for Counters.Counter;
   ERC20 _token;

   mapping (address => uint) _tokenId_;

    Counters.Counter private _tokenIdCounter;
    constructor(ERC20 token_) ERC721("QuestNFT", "QNFT") {
        _token = token_;
    }
    function safeMint() public {
        uint _amount = 1000 * 10**18;
        require(_token.balanceOf(msg.sender) >= _amount, "Not Enough QTK");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _token.transferFrom(msg.sender, address(this), _amount);
        _safeMint(msg.sender, tokenId);
        _tokenId_[msg.sender] = tokenId;           
    }

    function returnTokenId(address holder) public view returns(uint) {
        return _tokenId_[holder];
    }
}