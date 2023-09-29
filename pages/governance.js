import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Profile() {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
   <Head>
   <title>QUEST LABS GOVERNANCE</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;
   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>
        <div className="p-[5%] bg-[#234]">
        <div>
        <div><Link className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]" href="/"><i className="fa fa-caret-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>RETURN</span></Link> <span className="bg-[#00c] px-[0.5cm] py-[0.2cm] font-[500] rounded-md float-right">Connect Wallet</span></div>
        <div className="mt-[1cm]" style={{borderBottom:"2px solid #d7b644"}}></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 mt-[1.5cm]">
        <div className="grid-cols-1 lg:col-span-1 md:col-span-2 col-span-3" data-aos="zoom-out" style={{transition:"1s ease-in-out"}}>
            <div className="p-[8%] lg:mr-[10%] bg-[rgba(0,0,0,0.5)] rounded-xl">
            <img src="images/logo1.png" width="60" />
            <div className="lg:text-[140%] md:text-[140%] text-[120%] mt-[5%] font-[500]">Quest Labs DAO &nbsp; <i className="fa fa-check-circle"></i></div>
            <div className="mt-[0.7cm]"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems">Join DAO</span></div>
            <div className="mt-[0.6cm]"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems">Proposals</span></div>
            <div className="mt-[0.6cm]"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems">Vote for a Proposal</span></div>
            <div className="mt-[0.6cm]"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems">Create a New Proposal</span></div>
            <div className="mt-[0.6cm]"><span className="px-[0.4cm] py-[0.25cm] rounded-md bg-[#002] daomenuitems">About</span></div>
            </div>
        </div>

       <div className="grid-cols-1 lg:col-span-2 md:col-span-3 col-span-3" data-aos="zoom-out" style={{transition:"1s ease-in-out"}}>
        <div className="p-[5%] bg-[rgba(0,0,0,0.5)] rounded-xl">
           
            <div>
            <div className="text-center"><span className="lg:text-[150%] md:text-[140%] text-[120%] font-[500] text-[#fff]" style={{borderBottom:"2px solid #fff"}}>Become a Member</span></div>
            <div className="mt-[5%] lg:mx-[10%] md:mx-[5%] p-[5%]" data-aos="zoom-in" style={{transition:"1s ease-in-out", borderBottom:"2px solid #fff", borderRight:"2px solid #fff"}}>
            <form>
            <div>
            <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md lg:text-[110%] md:text-[110%] font-[500]" style={{border:"1px solid #ddd"}}>Username</label>
            <div className="mt-[0.2cm]"><input className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa] lg:text-[110%] md:text-[110%]" id="username" name="username" value="" placeholder="Choose a username" style={{borderBottom:"2px solid #ddd"}}/></div>
            </div>
            <div className="mt-[10%]">
            <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md lg:text-[110%] md:text-[110%] font-[500]" style={{border:"1px solid #ddd"}}>Age</label>
            <div className="mt-[0.2cm]"><input className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa] lg:text-[110%] md:text-[110%]" id="age" name="age" value="" placeholder="Please type your age" style={{borderBottom:"2px solid #ddd"}}/></div>
            </div>
            <div className="mt-[10%] px-[0.4cm] py-[0.2cm] bg-[#000] cursor-pointer rounded-md lg:text-[120%] md:text-[110%] text-center font-[500]">Join DAO</div>
            </form>
            </div>
            </div>
            
        </div>
        </div>
       </div>



       <div className="mt-[10%]">join dao, create a new proposal, vote for a proposal, all the proposals</div>
        Other things like number of members in DAO will be written above as a separate div.
       </div>
        </>
    )
}