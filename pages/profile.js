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