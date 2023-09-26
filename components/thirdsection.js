export default function ThirdSection() {
    return (
        <div className="p-[5%]">
        <div className="text-[180%] lg:text-[300%] md:text-[250%] text-center font-[600] mb-[5%]">We build $QUEST-powered products on Ethereum</div>
        <div className="rounded-xl p-[5%]" style={{backgroundImage:"url(images/bg19.jpg)"}}>
        <div><span className="lg:text-[200%] md:text-[180%] text-[150%] font-[600]">Quest Labs &nbsp; &nbsp;</span><span className="px-[0.3cm] py-[0.1cm] rounded-md bg-[#222]">Mainnet</span></div>
        <div className="mt-[3%] lg:mr-[25%] md:mr-[20%] text-[110%] lg:text-[130%] md:text-[120%]">
        Build dApps with exceptional UX, all while relying on Ethereum's unrivaled security, with our
         high-performance Ethereum layer-2 network built with modular architecture.
        </div>
        <div className="mt-[5%]"><span className="p-[0.2cm] rounded-md bg-[#111]" style={{border:"2px solid #fff"}}>Build on Quest Labs</span></div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-[5%]">
        <div className="grid grid-cols-1" data-aos="zoom-in" style={{transition:"1s ease-in-out"}}>
            <div className="bg-[rgba(0,0,0,0.9)] p-[5%]" style={{boxShadow:"5px 5px 2px 2px #000"}}>
            <div className="lg:text-[150%] md:text-[120%] text-[110%] font-[600]">Hyperscale Performance</div>
            <div className="lg:mr-[25%] md:mr-[20%] lg:text-[125%] md:text-[120%] text-[110%] mt-[3%]">Low fees and faster finality — achieved by combining roll-up technology with a decentralized data 
            availability layer (Quest Labs powered by Ethereum technology).</div>
            </div>
        </div>
        <div className="grid grid-cols-1" data-aos="zoom-in" style={{transition:"1s ease-in-out"}}>
            <div className="bg-[rgba(0,0,0,0.9)] p-[5%]" style={{boxShadow:"5px 5px 2px 2px #000"}}>
            <div className="lg:text-[150%] md:text-[120%] text-[110%] font-[600]">Secured by Ethereum</div>
            <div className="lg:mr-[25%] md:mr-[20%] lg:text-[125%] md:text-[120%] text-[110%] mt-[3%]">Experience high throughput with unrivaled security with Ethereum's roll-up technology — all in
             a familiar EVM environment.</div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}