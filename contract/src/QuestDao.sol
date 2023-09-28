// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../lib/openzeppelin-contracts/contracts/governance/Governor.sol";
import "../lib/openzeppelin-contracts/contracts/governance/extensions/GovernorSettings.sol";
import "../lib/openzeppelin-contracts/contracts/governance/extensions/GovernorCountingSimple.sol";
import "../lib/openzeppelin-contracts/contracts/governance/extensions/GovernorVotes.sol";
import "../lib/openzeppelin-contracts/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "../lib/openzeppelin-contracts/contracts/governance/extensions/GovernorTimelockControl.sol";
import "./QuestNFT.sol";

contract QuestDao is Governor, GovernorSettings, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {
    ERC721 _nft;

    struct MemberInfo {
        uint8 age;
        string username;
        string bio;
        address sender;
        uint id;
    }

    MemberInfo[] public _members; 
    constructor(IVotes _token, TimelockController _timelock, ERC721 _nft_)
        Governor("QuestDao")
        GovernorSettings(7200 /* 1 day */, 50400 /* 1 week */, 0)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4)
        GovernorTimelockControl(_timelock)
    {
        _nft = _nft_;
    }

    modifier onlyMembers() {
        require(_nft.balanceOf(msg.sender) > 0, "Not a member");
        _;
    }

    function joinDao(uint8 _age, string memory _name, string memory _email, uint _id) public {
        require (_nft.balanceOf(msg.sender) > 0, "Get the QNFT");
        MemberInfo memory info = MemberInfo(_age,_name, _email, msg.sender, _id);
        _members.push(info);
    }

    function getMembers() public view onlyMembers() returns(MemberInfo[] memory){
        return _members;
    }

    function getMember(address member_) public view onlyMembers() returns(MemberInfo memory member){
        for(uint i = 0; i <= _members.length; i++) {
            if(_members[i].sender == member_) {
                member = _members[i];
                return member;
            }
        }
    }

    // The following functions are overrides required by Solidity.

    function votingDelay()
        public
        view
        onlyMembers()
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingDelay();
    }

    function votingPeriod()
        public
        view
        onlyMembers()
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber)
        public
        view
        onlyMembers()
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }

    function state(uint256 proposalId)
        public
        view
        onlyMembers()
        override(Governor, GovernorTimelockControl)
        returns (ProposalState)
    {
        return super.state(proposalId);
    }

    function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description)
        public onlyMembers()
        override(Governor, IGovernor)
        returns (uint256)
    {
        return super.propose(targets, values, calldatas, description);
    }

    function proposalThreshold()
        public
        view
        onlyMembers()
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }

    function _execute(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
    {
        super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }

    function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal
        override(Governor, GovernorTimelockControl)
        returns (uint256)
    {
        return super._cancel(targets, values, calldatas, descriptionHash);
    }

    function _executor()
        internal
        view
        override(Governor, GovernorTimelockControl)
        returns (address)
    {
        return super._executor();
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        onlyMembers()
        override(Governor, GovernorTimelockControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
