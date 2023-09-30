import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Staking() {
    const [ethamount, setethamount] = useState()
    const [stakequest, setstakequest] = useState({
        questamount:"",
    })
    const [boughtQUESTsuccessAlert, setboughtQUESTSuccessAlert] = useState(false)
    const closeAlert = () => {
    setboughtQUESTSuccessAlert(false)
    }
     
    const handleInput2 = (event) => {
        setstakequest((prev) => ({...prev, [event.target.name]: [event.target.value]}))
    }

    useEffect(() => {
        AOS.init();
      }, [])

     const { ethers } = require("ethers");    //first require ethers
     //To write to contract to buy the $QUEST token
     // To get signer, first open Ethereum window, request for account, get wallet address, then get the provider
    const WriteToContractToBuyQUEST = async () => { 
    const ethereum = (window).ethereum;
    const accounts = await ethereum.request({
         method: "eth_requestAccounts",
     })
      // first account in MetaMask
     const walletAddress = accounts[0]; 
     const provider = new ethers.providers.Web3Provider(ethereum);
     const signer = provider.getSigner(walletAddress);
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
      
     const QuestTokenContractWriteSettings = new ethers.Contract(QuestTokenContractAddress, QuestTokenABI, signer)
     try {
        const writeToBuyQUEST = await QuestTokenContractWriteSettings.connect(signer).mint({value:ethers.utils.parseUnits(ethamount, 18)})
        setboughtQUESTSuccessAlert(true);
    }
     catch(error){
        console.log(error)
     }
    }
 
    return (
        <>
   <Head>
   <title>BUY AND STAKE $QUEST</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
        <div className="p-[5%] pb-[60%] bg-[#234]">
        <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]"><Link href="/"><i className="fa fa-caret-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>RETURN</span></Link></div>
        <div className="text-center mt-[5%]"><span className="bg-[#00c] px-[0.5cm] py-[0.3cm] font-[600] rounded-md">Connect Wallet</span></div>
        <div className="text-center lg:text-[120%] md:text-[120%] mt-[5%] lg:px-[10%] md:px-[10%]">Ensure you have <span className="text-[#d7b644]">$QUEST</span> in your wallet and connect wallet to stake. <br></br>
        By staking $QUEST, you own a Quest Labs NFT with which you can make proposals and make decisions in the ecosystem.</div>
        <div data-aos="zoom-out" className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8" style={{transition:"1s ease-in-out"}}>
        <div className="grid grid-cols-1 p-[5%]">
            <div className="text-[120%] text-center font-[600]" style={{textDecoration:"underline"}}>Buy $QUEST</div>
            <form className="mt-[5%]">
            <div className="bg-[#111] rounded-md p-[5%]">
                <div><span className="px-[0.4cm] py-[0.2cm] rounded-md bg-[rgba(0,0,0,0.4)]">ETH</span></div>
                <div className="mt-[3%]">Balance: </div>
                <input className="py-[0.2cm] text-[#fff] w-[100%] mt-[3%] rounded-md outline-none bg-[#111]" placeholder="0.00" type="text" id="ethamount" name="ethamount" value={ethamount} onChange={(e) => setethamount(e.target.value)}/>
            </div>
            <button type="submit" onClick={(e) => {e.preventDefault(); WriteToContractToBuyQUEST(ethamount)}} className="w-[100%] bg-[#000] mt-[3%] p-[0.2cm] rounded-md">Buy</button>
            </form>
        </div>
        <div className="grid grid-cols-1 p-[5%]">
            <div className="text-[120%] text-center font-[600]" style={{textDecoration:"underline"}}>Stake $QUEST</div>
            <form className="mt-[5%]">
            <div className="bg-[#111] rounded-md p-[5%]">
                <div><span className="px-[0.4cm] py-[0.2cm] rounded-md bg-[rgba(0,0,0,0.4)]">QUEST</span></div>
                <div className="mt-[3%]">Balance: {}</div>
                <input className="py-[0.2cm] text-[#fff] w-[100%] mt-[3%] rounded-md outline-none bg-[#111]" placeholder="0.00" type="text" id="questamount" name="questamount" value={stakequest.questamount} onChange={handleInput2}/>
            </div>
            <button type="submit" className="w-[100%] bg-[#000] mt-[3%] p-[0.2cm] rounded-md">Stake</button>
            </form>
        </div>
        </div>
        {boughtQUESTsuccessAlert ? 
        (<div>
        <div data-aos="slide-up" className="mx-[5%] fixed top-1 right-0 bg-[rgba(0,0,0,1)] text-white px-4 py-3 rounded-md" style={{transition:"1s ease-in-out"}}>
        <span>You have successfully bought $QUEST. Please check your wallet to see your balance.</span> &nbsp; &nbsp;
        <button><i className="fa fa-times-circle text-[130%] font-[600]" onClick={closeAlert}></i></button>
        </div>
        </div>
        ) : 
        (<div></div>)
        }
        </div>
        </>
    )
}