import { useState } from "react"

export default function JoinDao() {
    const [joindao, setJoinDao] = useState({
        username:"",
        age:"",
    })

      const handleInput = (event) => {
        setJoinDao((prev) => ({...prev, [event.target.name]: [event.target.value]}))
    }
    return (
        <div>
        <div className="text-center mt-[2%]"><span className="lg:text-[150%] md:text-[140%] text-[120%] font-[500] text-[#fff]" style={{borderBottom:"2px solid #fff"}}>Become a Member</span></div>
        <div className="mt-[5%] lg:mx-[10%] md:mx-[5%] p-[5%]" data-aos="zoom-in" style={{transition:"1s ease-in-out"}}>
        <form>
        <div>
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md lg:text-[110%] md:text-[110%] font-[500]" style={{border:"1px solid #ddd"}}>Username</label>
        <div className="mt-[0.2cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa] lg:text-[110%] md:text-[110%]" id="username" name="username" value={joindao.username} onChange={handleInput} placeholder="Choose a username" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <div className="mt-[10%]">
        <label className="bg-[rgba(0,0,0,0.8)] px-[0.4cm] py-[0.2cm] rounded-md lg:text-[110%] md:text-[110%] font-[500]" style={{border:"1px solid #ddd"}}>Age</label>
        <div className="mt-[0.2cm]"><input type="text" className="py-[0.2cm] outline-none w-[100%] bg-[rgba(0,0,0,0)] placeholder-[#aaa] lg:text-[110%] md:text-[110%]" id="age" name="age" value={joindao.age} onChange={handleInput} placeholder="Please type your age" style={{borderBottom:"2px solid #ddd"}} /></div>
        </div>
        <button type="submit" className="w-[100%] mt-[10%] px-[0.4cm] py-[0.2cm] bg-[#000] cursor-pointer rounded-md lg:text-[120%] md:text-[110%] text-center font-[500]">Join DAO</button>
        </form>
        </div>
        </div>
    )
}