import Link from "next/link";

export default function FourthSection() {
    return (
        <div className="p-[5%]">
       <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="grid grid-cols-1 px-[5%] py-[10%] rounded-xl" data-aos="flip-up" style={{backgroundImage:"url(images/bg7.gif)", backgroundSize:"100%", backgroundRepeat:"no-repeat", border:"2px solid #fff", transition:"1s ease-in-out"}}>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[600] mt-[20%]">QUEST Staking</div>
        <div className="lg:text-[150%] md:text-[120%] text-[110%] mt-[5%]">
        Enhancing the capital efficiency of ETH through decentralized staking services.
        </div>
        <div className="mt-[5%]"><span className="p-[0.3cm] bg-[rgba(0,0,200,0.2)] rounded-md fourthsectionbuttons"><Link href="https://ayalab.xyz">Forum Discussion</Link></span></div>
        </div>
        <div className="grid grid-cols-1 px-[5%] py-[10%] rounded-xl" data-aos="flip-up" style={{backgroundImage:"url(images/bg8.gif)", backgroundSize:"100%", backgroundRepeat:"no-repeat", border:"2px solid #fff", transition:"1s ease-in-out"}}>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[600] mt-[20%]">Next Quest Product</div>
        <div className="lg:text-[150%] md:text-[120%] text-[110%] mt-[5%]">
        Visit our forum to propose the next Quest DAO product. Synergize with existing Quest products, treasury, and ecosystem.
        </div>
        <div className="mt-[5%]"><span className="p-[0.3cm] bg-[rgba(0,0,200,0.2)] rounded-md fourthsectionbuttons"><Link href="https://ayalab.xyz">Visit Forum</Link></span></div>
        </div>
       </div>
        </div>
    )
}