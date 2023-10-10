import { useState } from "react"

export default function VoteForProposal() {
    const [proposalid, setproposalid] = useState();
    const [support, setsupport] = useState();
    const [reason, setreason] = useState();

    const { ethers } = require("ethers");
    const WriteToContractToVoteForAProposal = () => {
    
    }

 
    return (
        <div id="voteforaproposal" className="p-[5%]">
        <div className="text-center mt-[2%]"><span className="lg:text-[140%] md:text-[130%] text-[110%] text-[#fff] font-[500]">Vote for a Proposal</span></div>
        <div className="mt-[5%] lg:mx-[10%] md:mx-[5%]" data-aos="zoom-in" style={{transition:"1s ease-in-out"}}>
        <form>
        <div>
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Proposal ID</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="proposalid" name="proposalid" value={proposalid} onChange={(e) => setproposalid(e.target.value)} placeholder="Type ID of the proposal" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Support</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="support" name="support" value={support}  onChange={(e) => setsupport(e.target.value)} placeholder="Please type your support" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md" style={{}}>Reason</label>
        <div className="mt-[0.4cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa]" id="reason" name="reason" value={reason}  onChange={(e) => setreason(e.target.value)} placeholder="Please give a reason for voting for this proposal" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <button type="submit" onClick={(e) => {e.preventDefault(); WriteToContractToVoteForAProposal(proposalid, support, reason)}} className="w-[100%] mt-[10%] px-[0.4cm] py-[0.2cm] bg-[#000] cursor-pointer rounded-md lg:text-[120%] md:text-[110%] text-center font-[500] actionbutton" style={{transition:"1s ease-in-out"}}>Vote Proposal</button>
        </form>
        </div>
        </div>
    )
}