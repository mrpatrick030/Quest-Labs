import Link from "next/link"
import { useState, useEffect } from "react"

export default function SecondSection() {
    return (
        <div className="p-[5%]">
        <div className="text-[180%] lg:text-[300%] md:text-[250%] text-center font-[600] mb-[5%]">Ecosystem Blog Updates</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
            <div className="grid grid-cols-1 col-span-2" data-aos="slide-up" style={{transition:"1s ease-in-out"}}>
           <div className="rounded-xl bg-[#222] p-[5%] questrewarddiv" style={{backgroundImage:"url(images/bg15.jpg)"}}>
           <img className="mb-[5%]" src="images/logo1.png" width="80"/>
           <div className="text-[150%] lg:text-[250%] md:text-[200%] lg:mr-[20%] md:mr-[10%] mb-[5%]">
            Quest Labs 20M $QTK Reward Pool
           </div>
           <div className="mb-[6%]"><span className="bg-[#002] py-[0.3cm] px-[0.4cm]">Earn $QTK Now</span></div>
           <div className="font-[600] text-[130%] fa-fade" style={{animationDuration:"5s"}}><Link href="https://thequestlabs.vercel.app">Learn More</Link></div>
           </div>
            </div>
            <div className="grid grid-cols-1 lg:col-span-1 md:col-span-1 col-span-2">
                <div className="p-[5%] bg-[#111] rounded-xl" data-aos="slide-up" style={{transition:"1s ease-in-out"}}>
                    <div className="text-[120%] lg:text-[150%] md:text-[140%] font-[600] mb-[3%]">MigratorV2 Now Live</div>
                    <div className="mb-[10%]">Navigate $USDT to $QTK migration easily with MigratorV2.</div>
                    <div className="mb-[5%]"><span className="rounded-md p-[0.2cm] cursor-pointer" style={{border:"2px solid #fff"}}><Link href="https://medium.com">Migrate Now</Link></span></div>
                </div>
                <div className="p-[5%] bg-[#111] rounded-xl mt-[5%]" data-aos="slide-up" style={{transition:"1s ease-in-out"}}>
                    <div className="text-[120%] lg:text-[150%] md:text-[140%] font-[600] mb-[3%]">MIP-27: $USDT to $QTK Migration</div>
                    <div className="mb-[10%]">Proposal for the clarification of $USDT to $QTK migration policy and service has passed.</div>
                    <div className="mb-[5%]"><span className="rounded-md p-[0.2cm] cursor-pointer" style={{border:"2px solid #fff"}}><Link href="https://medium.com">Read More</Link></span></div>
                </div>
            </div>
        </div>
        <div className="mt-[5%] text-center"><span className="p-[0.3cm] bg-[#222] rounded-md lg:text-[120%] md:text-[110%]"><Link href="https://medium.com">Visit Medium for More Updates</Link></span></div>
        {/* <img src="https://ipfs.filebase.io/ipfs/Qmeii7AtRM5tEfMuVm6afQFXpVYeXZ4qt4x3WzARvgTFpr" /> */}
        </div>
        
    )
}