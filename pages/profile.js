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

    return (
        <>
   <Head>
   <title>USER PROFILE</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;
   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>
        <div>
        <div className="p-[5%] profilebackground" style={{backgroundImage:"url(images/bg3.jpg)", backgroundSize:"100%", backgroundPositionY:"90%"}}>
        <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]"><Link href="/"><i className="fa fa-caret-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>RETURN</span></Link></div>
            <div className="pt-[5%]"><i className="fa fa-user-circle lg:text-[450%] md:text-[400%] text-[300%]"></i></div>
            <div className="mt-[0.7cm]"><span className="bg-[#00c] px-[0.5cm] py-[0.2cm] font-[600] rounded-md">Connect Wallet</span></div>
        </div>
        <div></div>
        <Footer />
        </div>
        </>
    )
}