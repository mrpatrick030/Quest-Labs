// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract QuestTokenContract is ERC20, ERC20Permit, ERC20Votes {
    constructor() ERC20("QuestToken", "QTK") ERC20Permit("QuestTokenPermit") {}

    function mint() public payable {
        require (msg.value >= 0.005 ether, "Not Enough Eth");
        payable(address(this)).transfer(msg.value);
        _mint(msg.sender, 1000 * (10 ** 18));
    }
    receive () external payable {}

    // The functions below are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 amount) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20, ERC20Votes) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20, ERC20Votes) {
        super._burn(account, amount);
    }

}
