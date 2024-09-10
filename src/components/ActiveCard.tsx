const ActiveCard = () =>{
    return(
        <div className="border border-gray-300 rounded-lg md:w-[445px] w-full h-full relative">
            <div className="h-12 w-full bg-[#8C959F] rounded-t-lg relative"/>
            <img width={40} className="absolute rounded-full top-7 left-4 border border-gray-100" src="/assets/avatar.png" alt="avatar" />
            <div className="p-5">
                <div className="mt-3">
                    <p className="font-semibold text-xl max-w-sm">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="flex flex-row mt-3 gap-3">
                        <div className="flex flex-row gap-2 items-center bg-[#B7B7B7] p-1 px-2 rounded-full">
                            <img width={20} src="/assets/icon/bounty.svg" alt="icon" />
                            <small className="text-[#24292F]">Bounty</small>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-[#F2CE8F] p-1 px-2 rounded-full">
                            <img width={20} src="/assets/icon/mvp.svg" alt="icon" />
                            <small className="text-[#24292F]">MVP</small>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-[#0747BC] p-1 px-2 rounded-full">
                            <img width={20} src="/assets/icon/clock.svg" alt="icon" />
                            <small className="text-[#fff]">Quick Start</small>
                        </div>
                    </div>
                </div>
                <div className="mt-5 max-w-lg">
                    <small>Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque.</small>
                </div>
                <div className="mt-5 max-w-lg flex flex-row gap-5">
                    <div className="flex flex-row gap-2 items-end">
                        <img width={18} src="/assets/icon/list.svg" alt="icon" />
                        <small>3 Proposals</small>
                    </div>
                    <div className="flex flex-row gap-2 items-end">
                        <img width={18} src="/assets/icon/chat.svg" alt="icon" />
                        <small>3 replies</small>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F6F8FA] rounded-b-lg p-5 py-3">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row justify-between items-center w-full">
                        <small className="text-[#878A8E]">Submission Dealine <strong className="text-black font-semibold">April 15, 2024</strong></small>
                        <button className="border cursor-pointer border-gray-400 p-1 px-2 rounded-full flex flex-row gap-1 items-center">
                            <img width={16} src="/assets/icon/pen.svg" alt="icon" />
                            <small>Draft</small>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveCard;