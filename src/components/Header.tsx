import Link from "next/link";
import { navbarItems } from "@/utils/utils";

const Header = () =>{
    return(
        <div className="flex flex-row px-7 py-4 justify-between items-center w-full border-b border-gray-100 shadow-sm">
            <img width={140} src="/assets/logo/logo.svg" alt="logo" />
            <div className="flex flex-row gap-16 items-center">
                <div className="flex flex-row gap-5 items-center">
                    {
                        navbarItems.map((item,idx)=>(
                            <Link key={idx} href={`/${item.toLowerCase()}`}>
                                <span className="text-lg">{item}</span>
                            </Link>
                        ))
                    }
                </div>
                <button className="bg-[#64707B] p-2 rounded-full flex flex-row items-center text-white gap-2">
                    <img width={20} height={20} className="w-7 h-7 rounded-full" src="/assets/avatar.png" alt="avatar" />
                    <div className="flex flex-col">
                        <span className="text-[12px] font-semibold">Michael</span>
                        <small>Amichael.near</small>
                    </div>
                    <img width={20} height={20} className="w-5 h-5" src="/assets/icon/arrow-down.svg" alt="icon" />
                </button>
            </div>
        </div>
    )
}

export default Header;