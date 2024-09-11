"use client"
import { useState,useEffect } from "react";

const ProposalPost = () => {

    const [windowSize, setWindowSize] = useState<any>({
        width: null,
        height: null
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth as number,
                height: window.innerHeight as number,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []); 


    const truncateString = (str: string) =>{
        if(str.length > 100){
            return str.slice(0,100)+"..."
        }
        return str
    }

    return(
        <div className="w-full border border-gray-300 md:h-44 rounded-lg shadow-sm p-3 md:p-5">
            <div className="flex md:flex-row flex-col gap-3 items-end md:items-center justify-between">
                <div className="flex flex-col md:flex-row md:gap-3 gap-1">
                    <div className="flex flex-row gap-2 items-center md:items-start">
                        <img width={30} className="rounded-full md:w-8 md:h-8 w-6 h-6" src="/assets/avatar.png" alt="avatar" />
                        {
                            windowSize?.width <= 768&&(
                                <div className="flex flex-row gap-3">
                                    <span className="text-sm md:text-xl font-semibold">Proposal Title  goes here</span>
                                    <div className="flex flex-row gap-1 items-center bg-[#F2CE8F] p-1 px-2 rounded-full">
                                        <img width={windowSize?.width<768?12:14} src="/assets/icon/mvp.svg" alt="icon" />
                                        <small className="text-[#24292F] text-[10px]">MVP</small>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-1">
                        {
                            windowSize?.width > 768 &&(
                                <div className="flex flex-row gap-3">
                                    <span className="text-sm md:text-xl font-semibold">Proposal Title  goes here</span>
                                    <div className="flex flex-row gap-1 items-center bg-[#F2CE8F] p-1 px-2 rounded-full">
                                        <img width={16} src="/assets/icon/mvp.svg" alt="icon" />
                                        <small className="text-[#24292F] text-xs">MVP</small>
                                    </div>
                                </div>
                            )
                        }
                        <div className="flex flex-col gap-2">
                            <small className="font-semibold flex flex-row gap-1 items-center mt-2">
                                By
                                Boris.near
                                <span className="font-thin">| 2 hours ago</span>
                            </small>
                            <span>{truncateString('Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque.')}</span>
                        </div>
                        <div className="flex flex-row gap-5 mt-3 items-center">
                            <div className="flex flex-row gap-1 items-center">
                                <img width={15} src="/assets/icon/heart.svg" alt="icon" />
                                <small className="text-[#E0023D] font-semibold text-xs">3 votes</small>
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <img width={15} src="/assets/icon/reply.svg" alt="icon" />
                                <small className="text-[#04A46E] font-semibold text-xs">3 replies</small>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="border cursor-pointer border-gray-400 h-8 p-1 px-4 rounded-full flex flex-row gap-1 items-center">
                    <img width={16} src="/assets/icon/pen.svg" alt="icon" />
                    <small>Draft</small>
                </button>
            </div>
        </div>
    )
}

export default ProposalPost;