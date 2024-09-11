"use client"
import { truncateString } from "@/utils/utils";
import { useEffect, useState } from "react";

const Project = () =>{

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

    return(
        <div className="md:p-5 p-3 flex flex-col md:flex-row justify-between items-center gap-5 w-full border border-gray-300 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-3 flex-1">
                <div className="flex flex-row items-center gap-2">
                    <img className="md:w-7 md:h-7 h-8 w-8 rounded-full" src="/assets/avatar.png" alt="avatar" />
                    <span className="font-bold text-lg md:text-xl md:max-w-sm md:hidden">Lorem ipsum dolor sit amet consectetur. </span>
                </div>
                <div className="flex flex-col md:gap-3 gap-2">
                    <span className="font-bold text-xl max-w-sm md:block hidden">Lorem ipsum dolor sit amet consectetur. </span>
                    <small>{truncateString("Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque.",100)}</small>
                    <div className="flex flex-row">
                        <small className="font-bold border-solid border-black">By Boris.near</small>
                        <small className="pl-1">| 2 hours ago</small>
                    </div>
                    <div className="flex gap-2 flex-row flex-wrap">
                        <div className="flex px-2 border border-gray-400 rounded-full items-center gap-1 py-1">
                            <img width={14} src="/assets/icon/stars.svg" alt="icon" />
                            <small className="text-xs">Artificial Intelligence</small>
                        </div>
                        <div className="flex px-2 border border-gray-400 rounded-full items-center gap-1 py-1">
                            <img width={14} src="/assets/icon/stack.svg" alt="icon" />
                            <small className="text-xs">DAO</small>
                        </div>
                        <div className="flex px-2 border border-gray-400 rounded-full items-center gap-1 py-1">
                            <img width={14} src="/assets/icon/add.svg" alt="icon" />
                            <small className="text-xs">Plus 3 More</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-1 items-center justify-between w-full bg-gray-100 md:bg-transparent p-2">
                <div className="flex items-center gap-5">
                    <div className="h-[45px] w-[1px] bg-gray-300 hidden md:block"></div>
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-1 ">
                        <small>FUNDING NEED:</small>
                        <div className="flex items-center gap-1">
                            <img width={windowSize?.width < 768?18:27} src="/assets/icon/dollar.svg" alt="icon" />
                            <span className="text-xs md:text-3xl font-bold text-blue-700">18,000</span>
                        </div>
                    </div>
                </div>
                <button className="flex bg-white border border-gray-400 p-2 py-1 flex-row gap-2 rounded-full items-center">
                    <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="icon" />
                    <small className="text-xs md:text-sm">Dralf</small>
                </button>
            </div>
        </div> 
    )
}

export default Project;