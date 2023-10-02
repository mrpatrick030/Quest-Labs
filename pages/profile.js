import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/footer";

export default function Profile() {

    useEffect(() => {
        AOS.init();
      }, [])

      const [connectWallet, setConnectWallet] = useState(true)
      const [connectedWallet, setConnectedWallet] = useState(false)
      const disconnectWallet = () => {
        setConnectedWallet(false)
        setConnectWallet(true)
      } 

     //To connect wallet 
     const { ethers } = require("ethers");    //first require ethers 
     const GoerliBaseRPC = new ethers.providers.JsonRpcProvider("https://base-goerli.g.alchemy.com/v2/A3a3-kiXzRxVv26BXi3_ZhQchAw9pYXf");
     const QuestTokenContractAddress = "0x3626b039B965F9f2ED2D56F5E6397C88E89D164C"
     const QuestTokenABI = [
         { inputs: [], stateMutability: "nonpayable", type: "constructor" },
         { inputs: [], name: "InvalidShortString", type: "error" },
         {
           inputs: [{ internalType: "string", name: "str", type: "string" }],
           name: "StringTooLong",
           type: "error",
         },
         {
           anonymous: false,
           inputs: [
             {
               indexed: true,
               internalType: "address",
               name: "owner",
               type: "address",
             },
             {
               indexed: true,
               internalType: "address",
               name: "spender",
               type: "address",
             },
             {
               indexed: false,
               internalType: "uint256",
               name: "value",
               type: "uint256",
             },
           ],
           name: "Approval",
           type: "event",
         },
         {
           anonymous: false,
           inputs: [
             {
               indexed: true,
               internalType: "address",
               name: "delegator",
               type: "address",
             },
             {
               indexed: true,
               internalType: "address",
               name: "fromDelegate",
               type: "address",
             },
             {
               indexed: true,
               internalType: "address",
               name: "toDelegate",
               type: "address",
             },
           ],
           name: "DelegateChanged",
           type: "event",
         },
         {
           anonymous: false,
           inputs: [
             {
               indexed: true,
               internalType: "address",
               name: "delegate",
               type: "address",
             },
             {
               indexed: false,
               internalType: "uint256",
               name: "previousBalance",
               type: "uint256",
             },
             {
               indexed: false,
               internalType: "uint256",
               name: "newBalance",
               type: "uint256",
             },
           ],
           name: "DelegateVotesChanged",
           type: "event",
         },
         { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
         {
           anonymous: false,
           inputs: [
             { indexed: true, internalType: "address", name: "from", type: "address" },
             { indexed: true, internalType: "address", name: "to", type: "address" },
             {
               indexed: false,
               internalType: "uint256",
               name: "value",
               type: "uint256",
             },
           ],
           name: "Transfer",
           type: "event",
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
           name: "DOMAIN_SEPARATOR",
           outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "owner", type: "address" },
             { internalType: "address", name: "spender", type: "address" },
           ],
           name: "allowance",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "spender", type: "address" },
             { internalType: "uint256", name: "amount", type: "uint256" },
           ],
           name: "approve",
           outputs: [{ internalType: "bool", name: "", type: "bool" }],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [{ internalType: "address", name: "account", type: "address" }],
           name: "balanceOf",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "account", type: "address" },
             { internalType: "uint32", name: "pos", type: "uint32" },
           ],
           name: "checkpoints",
           outputs: [
             {
               components: [
                 { internalType: "uint32", name: "fromBlock", type: "uint32" },
                 { internalType: "uint224", name: "votes", type: "uint224" },
               ],
               internalType: "struct ERC20Votes.Checkpoint",
               name: "",
               type: "tuple",
             },
           ],
           stateMutability: "view",
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
           name: "decimals",
           outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "spender", type: "address" },
             { internalType: "uint256", name: "subtractedValue", type: "uint256" },
           ],
           name: "decreaseAllowance",
           outputs: [{ internalType: "bool", name: "", type: "bool" }],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
           name: "delegate",
           outputs: [],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "delegatee", type: "address" },
             { internalType: "uint256", name: "nonce", type: "uint256" },
             { internalType: "uint256", name: "expiry", type: "uint256" },
             { internalType: "uint8", name: "v", type: "uint8" },
             { internalType: "bytes32", name: "r", type: "bytes32" },
             { internalType: "bytes32", name: "s", type: "bytes32" },
           ],
           name: "delegateBySig",
           outputs: [],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [{ internalType: "address", name: "account", type: "address" }],
           name: "delegates",
           outputs: [{ internalType: "address", name: "", type: "address" }],
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
           inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
           name: "getPastTotalSupply",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "account", type: "address" },
             { internalType: "uint256", name: "timepoint", type: "uint256" },
           ],
           name: "getPastVotes",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [{ internalType: "address", name: "account", type: "address" }],
           name: "getVotes",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "spender", type: "address" },
             { internalType: "uint256", name: "addedValue", type: "uint256" },
           ],
           name: "increaseAllowance",
           outputs: [{ internalType: "bool", name: "", type: "bool" }],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [],
           name: "mint",
           outputs: [],
           stateMutability: "payable",
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
           inputs: [{ internalType: "address", name: "owner", type: "address" }],
           name: "nonces",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [{ internalType: "address", name: "account", type: "address" }],
           name: "numCheckpoints",
           outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "owner", type: "address" },
             { internalType: "address", name: "spender", type: "address" },
             { internalType: "uint256", name: "value", type: "uint256" },
             { internalType: "uint256", name: "deadline", type: "uint256" },
             { internalType: "uint8", name: "v", type: "uint8" },
             { internalType: "bytes32", name: "r", type: "bytes32" },
             { internalType: "bytes32", name: "s", type: "bytes32" },
           ],
           name: "permit",
           outputs: [],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [],
           name: "symbol",
           outputs: [{ internalType: "string", name: "", type: "string" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [],
           name: "totalSupply",
           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
           stateMutability: "view",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "to", type: "address" },
             { internalType: "uint256", name: "amount", type: "uint256" },
           ],
           name: "transfer",
           outputs: [{ internalType: "bool", name: "", type: "bool" }],
           stateMutability: "nonpayable",
           type: "function",
         },
         {
           inputs: [
             { internalType: "address", name: "from", type: "address" },
             { internalType: "address", name: "to", type: "address" },
             { internalType: "uint256", name: "amount", type: "uint256" },
           ],
           name: "transferFrom",
           outputs: [{ internalType: "bool", name: "", type: "bool" }],
           stateMutability: "nonpayable",
           type: "function",
         },
         { stateMutability: "payable", type: "receive" },
       ];
     const QuestTokenContractReadSettings = new ethers.Contract(QuestTokenContractAddress, QuestTokenABI, GoerliBaseRPC) 
     const connectwallet = async () => {
     const ethereum = (window).ethereum;
     const accounts = await ethereum.request({
          method: "eth_requestAccounts",
      })
       // first account in MetaMask
      const walletAddress = accounts[0]; 
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner(walletAddress);
      try {
       const readQuestTokenTotalsupply = await QuestTokenContractReadSettings.totalSupply();
       setConnectWallet(false);
       setConnectedWallet(true);
      }
      catch (error){
       alert("Check your network or ensure a wallet is installed on your device")
      }
       }

    return (
        <>
   <Head>
   <title>USER PROFILE</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
        <div>
        <div className="p-[5%] profilebackground" style={{backgroundImage:"url(images/bg3.jpg)", backgroundSize:"100%", backgroundPositionY:"90%"}}>
        <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]"><Link href="/"><i className="fa fa-caret-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>RETURN</span></Link></div>
            <div className="pt-[4%]"><i className="fa fa-user-circle lg:text-[450%] md:text-[400%] text-[300%]"></i></div>
            <div className="mt-[0.7cm]">
            <span>
            {connectWallet ? (<span className="bg-[#00c] px-[0.5cm] py-[0.3cm] font-[600] rounded-md cursor-pointer" onClick={connectwallet}>Connect Wallet</span>) : (<div></div>)}
            {connectedWallet ? (<span className="bg-[#070] px-[0.5cm] py-[0.3cm] font-[600] rounded-md cursor-pointer" onClick={disconnectWallet}>Connected</span>) : (<div></div>)}
            </span>
            </div>
        </div>
        <div className="bg-[#234] p-[5%]">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
                <div className="grid grid-cols-1">
                    <div className="lg:text-[200%] md:text-[180%] text-[130%] font-[600] text-[#d7b644]"><i className="fa fa-user"></i> &nbsp; Username</div>
                    <div className="text-[#ddd] lg:text-[150%] md:text-[130%] text-[120%] mt-[1%] font-[500]">Pato</div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="lg:text-[200%] md:text-[180%] text-[130%] font-[600] text-[#d7b644]"><i className="fa fa-info-circle"></i> &nbsp; Age</div>
                    <div className="text-[#ddd] lg:text-[150%] md:text-[130%] text-[120%] mt-[1%] font-[500]">18</div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="lg:text-[200%] md:text-[180%] text-[130%] font-[600] text-[#d7b644]"><i className="fa fa-id-badge"></i> &nbsp; User ID</div>
                    <div className="text-[#ddd] lg:text-[150%] md:text-[130%] text-[120%] mt-[1%] font-[500]">2</div>
                </div>
            </div>
            <div className="mt-[5%] lg:text-[200%] md:text-[180%] text-[130%] font-[600] text-[#d7b644]"><i className="fa fa-pencil-square"></i> &nbsp; Bio</div>
            <div className="text-[#ddd] lg:text-[150%] md:text-[130%] text-[120%] mt-[1%] font-[500]">I am a full stack web and blockchain developer</div>

            <div className="mt-[5%]" style={{borderBottom:"2px ridge #d7b644"}}></div>
            <div className="mt-[5%] p-[5%]" data-aos="fade-in" style={{border:"2px solid #fff", transition:"1s ease-in-out"}}>
                <div className="lg:text-[150%] md:text-[130%] text-[110%] mb-[5%] text-center">Your items will display here if available!</div>
                <div className="">{}</div>
            </div>
        </div>
       
        <Footer />
        </div>
        </>
    )
}