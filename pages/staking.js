import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Staking() {
    const [buyquest, setbuyquest] = useState({
        usdtamount:"",
    })
    const [stakequest, setstakequest] = useState({
        questamount:"",
    })

    const handleInput1 = (event) => {
        setbuyquest((prev) => ({...prev, [event.target.name]: [event.target.value]}))
    }
     
    const handleInput2 = (event) => {
        setstakequest((prev) => ({...prev, [event.target.name]: [event.target.value]}))
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
   <Head>
   <title>BUY AND STAKE $QUEST</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;
   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
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
                <div><span className="px-[0.4cm] py-[0.2cm] rounded-md bg-[rgba(0,0,0,0.4)]">USDT</span></div>
                <div className="mt-[3%]">Balance: {}</div>
                <input className="py-[0.2cm] text-[#fff] w-[100%] mt-[3%] rounded-md outline-none bg-[#111]" placeholder="0.00" type="text" id="usdtamount" name="usdtamount" value={buyquest.usdtamount} onChange={handleInput1}/>
            </div>
            <button type="submit" className="w-[100%] bg-[#000] mt-[3%] p-[0.2cm] rounded-md">Buy</button>
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
        </div>
        </>
    )
}