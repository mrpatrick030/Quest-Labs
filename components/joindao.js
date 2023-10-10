import { useState } from "react"

export default function JoinDao() {
   const [age, setAge] = useState();
   const [username, setUsername] = useState();
   const [bio, setBio] = useState();
   const [nftid, setnftid] = useState();
   const [joinQuestLabsDAOsuccessAlert, setjoinQuestLabsDAOsuccessAlert] = useState(false)
   const closeJoinDAOAlert = () => {
    setjoinQuestLabsDAOsuccessAlert(false)
   }


    const { ethers } = require("ethers");
   //To write to DAO contract to join DAO
   // To get signer, first open Ethereum window, request for account, get wallet address, then get the provider
   const WriteToContractToJoinDAO = async () => { 
   const ethereum = (window).ethereum;
   const accounts = await ethereum.request({
        method: "eth_requestAccounts",
    })
     // first account in MetaMask
    const walletAddress = accounts[0]; 
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner(walletAddress);
    const QuestDAOContractAddress = "0x98560A8b0b2CDeE447d583bd9c7995adECCa1A02"
    const QuestDAOABI = [
     {
       inputs: [
         { internalType: "contract IVotes", name: "_token", type: "address" },
         {
           internalType: "contract TimelockController",
           name: "_timelock",
           type: "address",
         },
         { internalType: "contract ERC721", name: "_nft_", type: "address" },
       ],
       stateMutability: "nonpayable",
       type: "constructor",
     },
     { inputs: [], name: "Empty", type: "error" },
     { inputs: [], name: "InvalidShortString", type: "error" },
     {
       inputs: [{ internalType: "string", name: "str", type: "string" }],
       name: "StringTooLong",
       type: "error",
     },
     { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "proposalId",
           type: "uint256",
         },
       ],
       name: "ProposalCanceled",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "proposalId",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "address",
           name: "proposer",
           type: "address",
         },
         {
           indexed: false,
           internalType: "address[]",
           name: "targets",
           type: "address[]",
         },
         {
           indexed: false,
           internalType: "uint256[]",
           name: "values",
           type: "uint256[]",
         },
         {
           indexed: false,
           internalType: "string[]",
           name: "signatures",
           type: "string[]",
         },
         {
           indexed: false,
           internalType: "bytes[]",
           name: "calldatas",
           type: "bytes[]",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "voteStart",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "voteEnd",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "string",
           name: "description",
           type: "string",
         },
       ],
       name: "ProposalCreated",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "proposalId",
           type: "uint256",
         },
       ],
       name: "ProposalExecuted",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "proposalId",
           type: "uint256",
         },
         { indexed: false, internalType: "uint256", name: "eta", type: "uint256" },
       ],
       name: "ProposalQueued",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "oldProposalThreshold",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "newProposalThreshold",
           type: "uint256",
         },
       ],
       name: "ProposalThresholdSet",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "oldQuorumNumerator",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "newQuorumNumerator",
           type: "uint256",
         },
       ],
       name: "QuorumNumeratorUpdated",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "address",
           name: "oldTimelock",
           type: "address",
         },
         {
           indexed: false,
           internalType: "address",
           name: "newTimelock",
           type: "address",
         },
       ],
       name: "TimelockChange",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: true,
           internalType: "address",
           name: "voter",
           type: "address",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "proposalId",
           type: "uint256",
         },
         { indexed: false, internalType: "uint8", name: "support", type: "uint8" },
         {
           indexed: false,
           internalType: "uint256",
           name: "weight",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "string",
           name: "reason",
           type: "string",
         },
       ],
       name: "VoteCast",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: true,
           internalType: "address",
           name: "voter",
           type: "address",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "proposalId",
           type: "uint256",
         },
         { indexed: false, internalType: "uint8", name: "support", type: "uint8" },
         {
           indexed: false,
           internalType: "uint256",
           name: "weight",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "string",
           name: "reason",
           type: "string",
         },
         { indexed: false, internalType: "bytes", name: "params", type: "bytes" },
       ],
       name: "VoteCastWithParams",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "oldVotingDelay",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "newVotingDelay",
           type: "uint256",
         },
       ],
       name: "VotingDelaySet",
       type: "event",
     },
     {
       anonymous: false,
       inputs: [
         {
           indexed: false,
           internalType: "uint256",
           name: "oldVotingPeriod",
           type: "uint256",
         },
         {
           indexed: false,
           internalType: "uint256",
           name: "newVotingPeriod",
           type: "uint256",
         },
       ],
       name: "VotingPeriodSet",
       type: "event",
     },
     {
       inputs: [],
       name: "BALLOT_TYPEHASH",
       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "CLOCK_MODE",
       outputs: [{ internalType: "string", name: "", type: "string" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "COUNTING_MODE",
       outputs: [{ internalType: "string", name: "", type: "string" }],
       stateMutability: "pure",
       type: "function",
     },
     {
       inputs: [],
       name: "EXTENDED_BALLOT_TYPEHASH",
       outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       name: "_members",
       outputs: [
         { internalType: "uint8", name: "age", type: "uint8" },
         { internalType: "string", name: "username", type: "string" },
         { internalType: "string", name: "bio", type: "string" },
         { internalType: "address", name: "sender", type: "address" },
         { internalType: "uint256", name: "id", type: "uint256" },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address[]", name: "targets", type: "address[]" },
         { internalType: "uint256[]", name: "values", type: "uint256[]" },
         { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
         { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
       ],
       name: "cancel",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "proposalId", type: "uint256" },
         { internalType: "uint8", name: "support", type: "uint8" },
       ],
       name: "castVote",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "proposalId", type: "uint256" },
         { internalType: "uint8", name: "support", type: "uint8" },
         { internalType: "uint8", name: "v", type: "uint8" },
         { internalType: "bytes32", name: "r", type: "bytes32" },
         { internalType: "bytes32", name: "s", type: "bytes32" },
       ],
       name: "castVoteBySig",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "proposalId", type: "uint256" },
         { internalType: "uint8", name: "support", type: "uint8" },
         { internalType: "string", name: "reason", type: "string" },
       ],
       name: "castVoteWithReason",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "proposalId", type: "uint256" },
         { internalType: "uint8", name: "support", type: "uint8" },
         { internalType: "string", name: "reason", type: "string" },
         { internalType: "bytes", name: "params", type: "bytes" },
       ],
       name: "castVoteWithReasonAndParams",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "proposalId", type: "uint256" },
         { internalType: "uint8", name: "support", type: "uint8" },
         { internalType: "string", name: "reason", type: "string" },
         { internalType: "bytes", name: "params", type: "bytes" },
         { internalType: "uint8", name: "v", type: "uint8" },
         { internalType: "bytes32", name: "r", type: "bytes32" },
         { internalType: "bytes32", name: "s", type: "bytes32" },
       ],
       name: "castVoteWithReasonAndParamsBySig",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [],
       name: "clock",
       outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "eip712Domain",
       outputs: [
         { internalType: "bytes1", name: "fields", type: "bytes1" },
         { internalType: "string", name: "name", type: "string" },
         { internalType: "string", name: "version", type: "string" },
         { internalType: "uint256", name: "chainId", type: "uint256" },
         { internalType: "address", name: "verifyingContract", type: "address" },
         { internalType: "bytes32", name: "salt", type: "bytes32" },
         { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address[]", name: "targets", type: "address[]" },
         { internalType: "uint256[]", name: "values", type: "uint256[]" },
         { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
         { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
       ],
       name: "execute",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "payable",
       type: "function",
     },
     {
       inputs: [{ internalType: "address", name: "member_", type: "address" }],
       name: "getMember",
       outputs: [
         {
           components: [
             { internalType: "uint8", name: "age", type: "uint8" },
             { internalType: "string", name: "username", type: "string" },
             { internalType: "string", name: "bio", type: "string" },
             { internalType: "address", name: "sender", type: "address" },
             { internalType: "uint256", name: "id", type: "uint256" },
           ],
           internalType: "struct QuestDao.MemberInfo",
           name: "member",
           type: "tuple",
         },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "getMembers",
       outputs: [
         {
           components: [
             { internalType: "uint8", name: "age", type: "uint8" },
             { internalType: "string", name: "username", type: "string" },
             { internalType: "string", name: "bio", type: "string" },
             { internalType: "address", name: "sender", type: "address" },
             { internalType: "uint256", name: "id", type: "uint256" },
           ],
           internalType: "struct QuestDao.MemberInfo[]",
           name: "",
           type: "tuple[]",
         },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address", name: "account", type: "address" },
         { internalType: "uint256", name: "timepoint", type: "uint256" },
       ],
       name: "getVotes",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address", name: "account", type: "address" },
         { internalType: "uint256", name: "timepoint", type: "uint256" },
         { internalType: "bytes", name: "params", type: "bytes" },
       ],
       name: "getVotesWithParams",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "proposalId", type: "uint256" },
         { internalType: "address", name: "account", type: "address" },
       ],
       name: "hasVoted",
       outputs: [{ internalType: "bool", name: "", type: "bool" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address[]", name: "targets", type: "address[]" },
         { internalType: "uint256[]", name: "values", type: "uint256[]" },
         { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
         { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
       ],
       name: "hashProposal",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "pure",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint8", name: "_age", type: "uint8" },
         { internalType: "string", name: "_username", type: "string" },
         { internalType: "string", name: "_bio", type: "string" },
         { internalType: "uint256", name: "_id", type: "uint256" },
       ],
       name: "joinDao",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [],
       name: "name",
       outputs: [{ internalType: "string", name: "", type: "string" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address", name: "", type: "address" },
         { internalType: "address", name: "", type: "address" },
         { internalType: "uint256[]", name: "", type: "uint256[]" },
         { internalType: "uint256[]", name: "", type: "uint256[]" },
         { internalType: "bytes", name: "", type: "bytes" },
       ],
       name: "onERC1155BatchReceived",
       outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address", name: "", type: "address" },
         { internalType: "address", name: "", type: "address" },
         { internalType: "uint256", name: "", type: "uint256" },
         { internalType: "uint256", name: "", type: "uint256" },
         { internalType: "bytes", name: "", type: "bytes" },
       ],
       name: "onERC1155Received",
       outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address", name: "", type: "address" },
         { internalType: "address", name: "", type: "address" },
         { internalType: "uint256", name: "", type: "uint256" },
         { internalType: "bytes", name: "", type: "bytes" },
       ],
       name: "onERC721Received",
       outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
       name: "proposalDeadline",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
       name: "proposalEta",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
       name: "proposalProposer",
       outputs: [{ internalType: "address", name: "", type: "address" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
       name: "proposalSnapshot",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "proposalThreshold",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
       name: "proposalVotes",
       outputs: [
         { internalType: "uint256", name: "againstVotes", type: "uint256" },
         { internalType: "uint256", name: "forVotes", type: "uint256" },
         { internalType: "uint256", name: "abstainVotes", type: "uint256" },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address[]", name: "targets", type: "address[]" },
         { internalType: "uint256[]", name: "values", type: "uint256[]" },
         { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
         { internalType: "string", name: "description", type: "string" },
       ],
       name: "propose",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address[]", name: "targets", type: "address[]" },
         { internalType: "uint256[]", name: "values", type: "uint256[]" },
         { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
         { internalType: "bytes32", name: "descriptionHash", type: "bytes32" },
       ],
       name: "queue",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
       name: "quorum",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "quorumDenominator",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
       name: "quorumNumerator",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "quorumNumerator",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "address", name: "target", type: "address" },
         { internalType: "uint256", name: "value", type: "uint256" },
         { internalType: "bytes", name: "data", type: "bytes" },
       ],
       name: "relay",
       outputs: [],
       stateMutability: "payable",
       type: "function",
     },
     {
       inputs: [
         {
           internalType: "uint256",
           name: "newProposalThreshold",
           type: "uint256",
         },
       ],
       name: "setProposalThreshold",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "newVotingDelay", type: "uint256" },
       ],
       name: "setVotingDelay",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "newVotingPeriod", type: "uint256" },
       ],
       name: "setVotingPeriod",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
       name: "state",
       outputs: [
         { internalType: "enum IGovernor.ProposalState", name: "", type: "uint8" },
       ],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
       name: "supportsInterface",
       outputs: [{ internalType: "bool", name: "", type: "bool" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "timelock",
       outputs: [{ internalType: "address", name: "", type: "address" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "token",
       outputs: [{ internalType: "contract IERC5805", name: "", type: "address" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [
         { internalType: "uint256", name: "newQuorumNumerator", type: "uint256" },
       ],
       name: "updateQuorumNumerator",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [
         {
           internalType: "contract TimelockController",
           name: "newTimelock",
           type: "address",
         },
       ],
       name: "updateTimelock",
       outputs: [],
       stateMutability: "nonpayable",
       type: "function",
     },
     {
       inputs: [],
       name: "version",
       outputs: [{ internalType: "string", name: "", type: "string" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "votingDelay",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     {
       inputs: [],
       name: "votingPeriod",
       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
       stateMutability: "view",
       type: "function",
     },
     { stateMutability: "payable", type: "receive" },
   ];
    const QuestContractWriteSettings = new ethers.Contract(QuestDAOContractAddress, QuestDAOABI, signer)
    try {
       const writeToJoinDAO = await QuestContractWriteSettings.connect(signer).joinDao(age, username, bio, nftid)
       setjoinQuestLabsDAOsuccessAlert(true)
    }
    catch(error){
       console.log(error)
    }
   }

    return (
        <div id="joindao" className="p-[5%]">
        <div className="text-center mt-[2%]"><span className="lg:text-[140%] md:text-[130%] text-[110%] text-[#fff] font-[500]">Become a Member</span></div>
        <div className="text-center mt-[2%] text-[#d7b644]">You must own a Quest Labs NFT to become a member of the DAO!</div>
        <div className="mt-[5%] lg:mx-[10%] md:mx-[5%]" data-aos="zoom-in" style={{transition:"1s ease-in-out"}}>
        <form>
        <div>
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Username</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="username" name="username" value={username} onChange={((e) => setUsername(e.target.value))} placeholder="Choose a username" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Age</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Please type your age" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Bio</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="bio" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Please tell the community a bit about yourself" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>NFT ID</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="nftid" name="nftid" value={nftid} onChange={(e) => setnftid(e.target.value)} placeholder="Input the unique ID of your Quest Labs NFT" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <button type="submit" onClick={(e) => {e.preventDefault(); WriteToContractToJoinDAO(age, username, bio, nftid)}} className="w-[100%] mt-[10%] px-[0.4cm] py-[0.2cm] bg-[#000] cursor-pointer rounded-md lg:text-[120%] md:text-[110%] text-center font-[500] actionbutton" style={{transition:"1s ease-in-out"}}>Join DAO</button>
        </form>
        </div>
        {joinQuestLabsDAOsuccessAlert ? 
        (<div>
        <div data-aos="slide-up" className="mx-[5%] fixed top-1 right-0 bg-[rgba(0,0,0,1)] text-white px-4 py-3 rounded-md" style={{transition:"1s ease-in-out"}}>
        <span><span className="text-[#090] text-[120%] font-[500]">Congrats!!! </span> You are now a member of the Quest Labs DAO.</span> &nbsp; &nbsp;
        <button><i className="fa fa-times-circle text-[130%] font-[600]" onClick={closeJoinDAOAlert}></i></button>
        </div>
        </div>
        ) : 
        (<div></div>)
        }
        </div>
    )
}