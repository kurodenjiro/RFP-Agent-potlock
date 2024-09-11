"use client"
import Link from "next/link";
import { navbarItems } from "@/utils/utils";
import { useEffect, useState } from "react";

const Header = () =>{

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
        <div className="flex flex-row justify-center items-center md:py-4 py-2 w-full border-b border-gray-100 shadow-sm">
            <div className="flex flex-row justify-between w-full items-center md:max-w-screen-2xl md:px-20 px-5">
                <Link href={"/"}>
                    <img width={windowSize?.width <= 768?100:140} src="/assets/logo/logo.svg" alt="logo" />
                </Link>
                <div className="flex flex-row gap-16 items-center">
                    {
                        windowSize?.width <= 768 ?(
                            <button>
                                <img width={30} className="visible md:invisible" src="/assets/icon/menu.svg" alt="icon" />
                            </button>
                        ):(
                            <div className="flex flex-row gap-5 items-center invisible md:visible">
                                {
                                    navbarItems.map((item,idx)=>(
                                        <Link key={idx} href={`/${item.toLowerCase()}`}>
                                            <span className="text-lg">{item}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                            
                        )
                    }
                    {
                        windowSize?.width >= 768 &&(
                            <button className="bg-[#64707B] p-2 rounded-full flex flex-row items-center text-white gap-2 invisible md:visible">
                                <img width={20} height={20} className="w-7 h-7 rounded-full" src="/assets/avatar.png" alt="avatar" />
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-semibold">Michael</span>
                                    <small>Amichael.near</small>
                                </div>
                                <img width={20} height={20} className="w-5 h-5" src="/assets/icon/arrow-down.svg" alt="icon" />
                            </button>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Header;