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
       </div>
       <div className="mt-[10%]">join dao, create proposal, vote for a proposal, all the proposals</div>
        Other things like number of members in DAO will be written above as a separate div.
       </div>
        </>
    )
}