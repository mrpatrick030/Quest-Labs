import Link from "next/link";

export default function FifthSection() {
    return (
        <div className="p-[5%]">
             <div className="text-[180%] lg:text-[300%] md:text-[250%] text-center font-[600] mb-[5%]">Quest Labs Governance: Token holders determine the strategic direction of the ecosystem</div>
       <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="grid grid-cols-1 px-[5%] py-[10%] rounded-xl bg-[#056]" data-aos="flip-down" style={{border:"2px solid #fff", transition:"1s ease-in-out"}}>
            <div className="m-[auto]"><img src="images/blockchain.png" width="70"/></div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[600] mt-[10%]">Governance</div>
        <div className="lg:text-[120%] md:text-[110%] text-[105%] mt-[5%]">
        All decisions, from launching new initiatives, to transferring and recalling treasury resources, 
        assigning and modifying powers to operating teams, and implementing corrective actions, are subject to 
        proposals and voting by $QTK holders. An amount of $QTK is staked to receive the Quest Labs 
        NFT which members of the ecosystem utilize in making decisions and proposals. 
        </div>
        <div className="mt-[5%]"><span className="p-[0.3cm] bg-[rgba(0,0,0,1)] rounded-md"><Link href="https://ayalab.xyz">Forum Discussion</Link></span> &nbsp; &nbsp; <span className="p-[0.3cm] bg-[rgba(0,0,0,1)] rounded-md"><Link href="/proposals">Governance</Link></span></div>
        </div>
        <div className="grid grid-cols-1 px-[5%] py-[10%] rounded-xl bg-[#065]" data-aos="flip-down" style={{border:"2px solid #fff", transition:"1s ease-in-out"}}>
        <div className="m-[auto]"><img src="images/wallet.png" width="70"/></div>
        <div className="lg:text-[200%] md:text-[180%] text-[150%] font-[600] mt-[10%]">Resource Management</div>
        <div className="lg:text-[120%] md:text-[110%] text-[105%] mt-[5%]">
        As stewards of a significant treasury, and with the power to shape economic outcomes of Quest Labs products, we prioritize a value-oriented mindset, transparency, and accountability.
        </div>
        <div className="mt-[5%]"><span className="p-[0.3cm] bg-[rgba(0,0,0,1)] rounded-md"><Link href="https://ayalab.xyz">Visit Forum</Link></span>  &nbsp; &nbsp; <span className="p-[0.3cm] bg-[rgba(0,0,0,1)] rounded-md"><Link href="/marketplace">Visit Marketplace</Link></span></div>
        </div>
       </div>
        </div>
    )
}