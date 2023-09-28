// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {QuestTokenContract} from "../src/QuestToken.sol";
import {QuestNFT} from "../src/QuestNFT.sol";
import {QuestDao} from "../src/QuestDao.sol";
import "../lib/openzeppelin-contracts/contracts/governance/extensions/GovernorTimelockControl.sol";
import "../lib/openzeppelin-contracts/contracts/governance/TimelockController.sol";



contract QuestTest is Test {
    QuestTokenContract public token;
    QuestNFT public nft;
    QuestDao public dao;
    TimelockController public timelock;
    GovernorTimelockControl public governorTimelock;

    address _holder = mkaddr("holder");
    address _holder1 = mkaddr("holder1");
    function setUp() public {
        token = new QuestTokenContract();
        nft = new QuestNFT(token);
        address[] memory arr = new address[](2);
        arr[0] = _holder;
        arr[1] = _holder1;
        timelock = new TimelockController(180,arr,arr,_holder);
        dao = new QuestDao(token, timelock, nft);
    }

    function testMint() public {
        vm.deal(_holder, 0.5 ether);
        vm.prank(_holder);
        token.balanceOf(_holder);
        token.mint{value: 0.05 ether}();
        token.balanceOf(_holder);
        token.approve(address(nft), 1000000000000000000000);
        nft.safeMint();
    }

           function mkaddr(string memory name) public returns (address) {
        address addr = address(
            uint160(uint256(keccak256(abi.encodePacked(name))))
        );
        vm.label(addr, name);
        return addr;
    }


}
