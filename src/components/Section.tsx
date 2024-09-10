const Section = () =>{
    return(
        <div className="relative w-full h-full">
            <img width={100} className="w-full h-full" src="/assets/background/background-section.png" alt="background" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-5 text-center">
                    <span className="font-semibold text-4xl">Proposal</span>
                    <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur. Tortor ac amet imperdiet nam odio varius proin. </p>
                    <div className="flex flex-row gap-3 mt-5">
                        <div className="flex flex-row gap-2 border border-gray-200 bg-white text-black p-3 rounded-full w-[300px] items-center">
                            <img width={14} src="/assets/icon/search.svg" alt="icon" />
                            <input className="outline-none text-sm placeholder:text-sm w-full" type="text" placeholder="Select"/>
                            <img width={14} src="/assets/icon/close.svg" alt="icon" />
                        </div>
                        <button className="flex flex-row justify-between gap-2 border border-gray-200 bg-white text-black p-3 py-2 rounded-full w-[160px] items-center">
                            <small className="text-[#666F8D]">Sort by: Recent</small>
                            <img width={17} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                        </button>
                        <button className="flex flex-row justify-between gap-2 border border-gray-200 bg-white text-black p-3 py-2 rounded-full w-[180px] items-center">
                            <small className="text-[#666F8D]">Category: Bounty</small>
                            <img width={17} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                        </button>
                        <button className="flex flex-row justify-between gap-2 border border-gray-200 bg-white text-black p-3 py-2 rounded-full w-[140px] items-center">
                            <small className="text-[#666F8D]">Stage: All</small>
                            <img width={17} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;