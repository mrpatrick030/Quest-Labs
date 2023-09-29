import { useState } from "react"

export default function CreateProposal() {
    const [createProposal, setCreateproposal] = useState({
        address:"",
        description:""
    })

      const handleInput = (event) => {
        setCreateproposal((prev) => ({...prev, [event.target.name]: [event.target.value]}))
    }
    return (
        <div id="createaproposal" className="p-[5%]">
        <div className="text-center mt-[2%]"><span className="lg:text-[140%] md:text-[130%] text-[110%] text-[#fff] font-[500]">Create a Proposal</span></div>
        <div className="mt-[5%] lg:mx-[10%] md:mx-[5%]" data-aos="zoom-in" style={{transition:"1s ease-in-out"}}>
        <form>
        <div>
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Wallet Address</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="address" name="address" value={createProposal.address} onChange={handleInput} placeholder="Input your wallet address" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Description</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="description" name="description" value={createProposal.description} onChange={handleInput} placeholder="Please give your proposal a description" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <button type="submit" className="w-[100%] mt-[10%] px-[0.4cm] py-[0.2cm] bg-[#000] cursor-pointer rounded-md lg:text-[120%] md:text-[110%] text-center font-[500]">Create Proposal</button>
        </form>
        </div>
        </div>
    )
}