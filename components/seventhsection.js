export default function SeventhSection() {
    return (
        <div className="p-[5%]">
            <div className="text-[180%] lg:text-[300%] md:text-[250%] text-center font-[600] mb-[5%]">Join the Community</div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="grid-cols-1 px-[8%] pt-[10%] pb-[20%] rounded-xl socialcols1">
             <div><span className="px-[0.5cm] py-[0.3cm] bg-[rgba(0,0,0,0.8)] rounded-md">Twitter</span></div>
             <div className="mt-[0.5cm] text-center"><i className="fab fa-twitter text-[350%]"></i></div>
            </div>
            <div className="grid-cols-1 px-[8%] pt-[10%] pb-[20%] rounded-xl socialcols2">
             <div><span className="px-[0.5cm] py-[0.3cm] bg-[rgba(0,0,0,0.8)] rounded-md">Telegram</span></div>
             <div className="mt-[0.5cm] text-center"><i className="fab fa-telegram text-[350%]"></i></div>
            </div>
            <div className="grid-cols-1 px-[8%] pt-[10%] pb-[20%] rounded-xl socialcols3">
             <div><span className="px-[0.5cm] py-[0.3cm] bg-[rgba(0,0,0,0.8)] rounded-md">Discord</span></div>
             <div className="mt-[0.5cm] text-center"><i className="fab fa-discord text-[350%]"></i></div>
            </div>
            <div className="grid-cols-1 px-[8%] pt-[10%] pb-[20%] rounded-xl socialcols4">
             <div><span className="px-[0.5cm] py-[0.3cm] bg-[rgba(0,0,0,0.8)] rounded-md">LinkedIn</span></div>
             <div className="mt-[0.5cm] text-center"><i className="fab fa-linkedin text-[350%]"></i></div>
            </div>
            </div>
        </div>
    )
}