import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import JoinDao from "@/components/joindao";
import VoteForProposal from "@/components/voteforaproposal";
import CreateProposal from "@/components/createaproposal";
import Proposals from "@/components/proposals";

export default function Profile() {
   const [renderComponent, setRenderedComponent] = useState("joindaodisplaycomponent")
   const changedisplay = (newcomponent) => {
    setRenderedComponent(newcomponent);
   } 
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
        const connectwallet = async () => {
        const ethereum = (window).ethereum;
        const accounts = await ethereum.request({
             method: "eth_requestAccounts",
         })
          // first account in MetaMask
         const walletAddress = accounts[0]; 
         const provider = new ethers.providers.Web3Provider(ethereum);
         const signer = provider.getSigner(walletAddress);
         setConnectWallet(false);
         setConnectedWallet(true);
          }

    return (
        <>
   <Head>
   <title>QUEST LABS GOVERNANCE</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
        <div className="p-[5%] bg-[#234]">
        <div>
        <div><Link className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]" href="/"><i className="fa fa-caret-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>RETURN</span></Link> <span className="float-right">
          {connectWallet ? (<span className="bg-[#00c] px-[0.5cm] py-[0.3cm] font-[600] rounded-md cursor-pointer" onClick={connectwallet}>Connect Wallet</span>) : (<div></div>)}
          {connectedWallet ? (<span className="bg-[#070] px-[0.5cm] py-[0.3cm] font-[600] rounded-md cursor-pointer" onClick={disconnectWallet}>Connected</span>) : (<div></div>)}
          </span>
        </div>
        <div className="mt-[1cm]" style={{borderBottom:"2px solid #d7b644"}}></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 mt-[1.5cm]">
        <div className="grid-cols-1 lg:col-span-1 md:col-span-2 col-span-3" style={{transition:"1s ease-in-out"}}>
            <div className="p-[8%] lg:mr-[10%] bg-[rgba(0,0,0,0.5)] rounded-xl">
            <img src="images/logo1.png" width="60" />
            <div className="lg:text-[140%] md:text-[140%] text-[120%] mt-[5%] font-[500]">Quest Labs DAO &nbsp; <i className="fa fa-check-circle"></i></div>
            <div className="mt-[0.7cm]"><Link href="#joindao"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems" onClick={() => changedisplay("joindaodisplaycomponent")}>Join DAO</span></Link></div>
            <div className="mt-[0.6cm]"><Link href="#createaproposal"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems" onClick={() => changedisplay("createaproposaldisplaycomponent")}>Create a New Proposal</span></Link></div>
            <div className="mt-[0.6cm]"><Link href="#voteforaproposal"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems" onClick={() => changedisplay("voteforproposaldisplaycomponent")}>Vote for a Proposal</span></Link></div>
            {/* <div className="mt-[0.6cm]"><Link href="#proposals"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems" onClick={() => changedisplay("proposalsdisplaycomponent")}>Proposals</span></Link></div> */}
            </div>
        </div>

       <div className="grid-cols-1 lg:col-span-2 md:col-span-3 col-span-3" style={{transition:"1s ease-in-out"}}>
        <div className="bg-[rgba(0,0,0,0.5)] rounded-xl">
           
         {renderComponent === "joindaodisplaycomponent" && <JoinDao />}
         {renderComponent === "createaproposaldisplaycomponent" && <CreateProposal />}
         {renderComponent === "voteforproposaldisplaycomponent" && <VoteForProposal />}
         {/* {renderComponent === "proposalsdisplaycomponent" && <Proposals />} */}
         
        </div>
        </div>
       </div>

       </div>
        </>
    )
}