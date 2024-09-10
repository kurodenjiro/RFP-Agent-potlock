import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProposalTemplate from "@/components/ProposalTemplate";
import Link from "next/link";
const Projects = () =>{
    return(
        <div className="w-full h-full">
            <Header/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-10 w-full md:mt-20 mt-10 pb-20">
                    <div className="bg-slate-200 flex flex-col items-center justify-center">
                        <div className="flex flex-col gap-5 justify-center items-center mt-[50px] mb-[10px]">
                            <span className="text-4xl font-bold ">Project</span>
                            <p className="font-bold">Lorem ipsum dolor sit amet consectetur. Tortor ac amet imperdiet nam odio varius proin. </p>
                        </div>
                        <div className="flex gap-3 my-[20px]">
                           <div className="flex items-center gap-2 w-[308px] h-[40px] border rounded-xl bg-white px-2">
                               <img width={12} src="/assets/icon/search.svg" alt="" />
                               <input type="search" className="text-xs text-gray-500 flex-1 focus outline-none"placeholder="Select"/>
                           </div>
                           <div className="flex gap-2">
                               <div className="flex items-center justify-between gap-2 w-[143px] h-[40px] border rounded-xl bg-white px-2">
                                   <span className="text-xs text-gray-400">Sort by: Recent</span>
                                   <img width={14} src="/assets/icon/chevrondown.svg" alt="" />
                               </div>
                               <div className="flex items-center justify-between gap-2 w-[143px] h-[40px] border rounded-xl bg-white px-2">
                                   <span className="text-xs text-gray-400">Category: Bounty</span>
                                   <img width={14} src="/assets/icon/chevrondown.svg" alt="" />
                               </div>
                               <div className="flex items-center justify-between gap-2 w-[143px] h-[40px] border rounded-xl bg-white px-2">
                                   <span className="text-xs text-gray-400">Stage: All</span>
                                   <img width={14} src="/assets/icon/chevrondown.svg" alt="" />
                               </div>
                           </div>
                        </div>
                    </div> 
                    <div className="flex flex-col gap-10 mt-8 px-20">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <div className="flex gap-1">
                                    <span className="text-xl font-bold">$53,000,00</span>
                                    <span className="text-xl font-thin">Total Awarded</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="text-xl font-bold">200</span>
                                    <span className="text-xl font-thin">RFPs</span>
                                </div>
                                <div className="flex gap-1">
                                    <span className="text-xl font-bold">400</span>
                                    <span className="text-xl font-thin">Non RFPs</span>
                                </div>
                            </div>
                            <Link href={''} className="flex flex-row items-center bg-blue-600 rounded-3xl px-3 p-2">
                                <img width={16} src="/assets/icon/add-white.svg" alt="" />
                                <span className="text-sm font-thin text-white">Submit Project</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-semibold">
                                Featured Projects
                            </span>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2 w-[400px] h-[308px] px-2 py-3 border border-solid rounded-md">
                                    <div className="flex gap-3">
                                        <div className="w-[41px] h-[41px]">
                                            <img width={41} src="/assets/icon/avatar.png" alt="" />
                                        </div>
                                        <span className="font-bold w-[200px]">Lorem ipsum dolor sit amet consectetur. </span>
                                    </div>
                                    <div className="w-[300px]">
                                        <small>Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                    </div>
                                    <div className="flex gap-1">
                                        <small>By</small>
                                        <div className="flex gap-1">
                                            <img width={14} className="w-[14px] h-[14px]" src="/assets/icon/avatar.png" alt="" />
                                            <div className="flex gap-1">
                                                <small className="font-bold">Potluck.near</small>
                                                <small>2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex px-2 border border-solid rounded-2xl  ">
                                            <img src="/assets/icon/stars.svg" alt="" />
                                            <small>Artificial Intelligence</small>
                                        </div>
                                        <div className="flex px-2 border border-solid rounded-2xl  ">
                                            <img src="/assets/icon/stack.svg" alt="" />
                                            <small>DAO</small>
                                        </div>
                                        <div className="flex px-2 border border-solid rounded-2xl  ">
                                            <img width={14} src="/assets/icon/add.svg" alt="" />
                                            <small>Plus 3 More</small>
                                        </div>
                                    </div>
                                    <div className="flex justify-between bg-slate-100 p-3">
                                        <div className="flex">
                                            <small>FUNDING NEED:</small>
                                            <img width={16} src="/assets/icon/dollar.svg" alt="" />
                                            <small className="text-blue-700 font-bold">2,000</small>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[400px] h-[308px] border border-solid rounded-md">
                                <div className="flex flex-col gap-2 w-[400px] h-[308px] px-2 py-3 border border-solid rounded-md">
                                    <div className="flex gap-3">
                                        <div className="w-[41px] h-[41px]">
                                            <img width={41} src="/assets/icon/avatar.png" alt="" />

                                        </div>
                                        <span className="font-bold w-[200px]">Lorem ipsum dolor sit amet consectetur. </span>
                                    </div>
                                    <div className="w-[300px]">
                                        <small>Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                    </div>
                                    <div className="flex gap-1">
                                        <small>By</small>
                                        <div className="flex gap-1">
                                            <img width={14} className="w-[14px] h-[14px]" src="/assets/icon/avatar.png" alt="" />
                                            <div className="flex gap-1">
                                                <small className="font-bold">Potluck.near</small>
                                                <small>2 days ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex px-2 border border-solid rounded-2xl  ">
                                            <img src="/assets/icon/stars.svg" alt="" />
                                            <small>Artificial Intelligence</small>
                                        </div>
                                        <div className="flex px-2 border border-solid rounded-2xl  ">
                                            <img src="/assets/icon/stack.svg" alt="" />
                                            <small>DAO</small>
                                        </div>
                                        <div className="flex px-2 border border-solid rounded-2xl  ">
                                            <img width={14} src="/assets/icon/add.svg" alt="" />
                                            <small>Plus 3 More</small>
                                        </div>
                                    </div>
                                    <div className="flex justify-between bg-slate-100 p-3">
                                        <div className="flex">
                                            <small>FUNDING NEED:</small>
                                            <img width={16} src="/assets/icon/dollar.svg" alt="" />
                                            <small className="text-blue-700 font-bold">2,000</small>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="w-[400px] h-[308px] border border-solid rounded-md">
                                    <div className="flex flex-col gap-2 w-[400px] h-[308px] px-2 py-3 border border-solid rounded-md">
                                        <div className="flex gap-3">
                                            <div className="w-[41px] h-[41px]">
                                                <img width={41} src="/assets/icon/avatar.png" alt="" />

                                            </div>
                                            <span className="font-bold w-[200px]">Lorem ipsum dolor sit amet consectetur. </span>
                                        </div>
                                        <div className="w-[300px]">
                                            <small>Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                        </div>
                                        <div className="flex gap-1">
                                            <small>By</small>
                                            <div className="flex gap-1">
                                                <img width={14} className="w-[14px] h-[14px]" src="/assets/icon/avatar.png" alt="" />
                                                <div className="flex gap-1">
                                                    <small className="font-bold">Potluck.near</small>
                                                    <small>2 days ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="flex px-2 border border-solid rounded-2xl  ">
                                                <img src="/assets/icon/stars.svg" alt="" />
                                                <small>Artificial Intelligence</small>
                                            </div>
                                            <div className="flex px-2 border border-solid rounded-2xl  ">
                                                <img src="/assets/icon/stack.svg" alt="" />
                                                <small>DAO</small>
                                            </div>
                                            <div className="flex px-2 border border-solid rounded-2xl  ">
                                                <img width={14} src="/assets/icon/add.svg" alt="" />
                                                <small>Plus 3 More</small>
                                            </div>
                                        </div>
                                        <div className="flex justify-between bg-slate-100 p-3">
                                            <div className="flex items-center">
                                                <small>FUNDING NEED:</small>
                                                <img width={16} src="/assets/icon/dollar.svg" alt="" />
                                                <small className="text-blue-700 font-bold">2,000</small>
                                            </div>
                                            <div className="flex bg-white border border-solid border-black p-1 gap-1 rounded-2xl">
                                                <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                                <small>Dralf</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="flex p-20 flex-row gap-10">
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-bold">ALL PROJECT</span>
                            <div className="flex flex-col gap-3">
                                <div className="p-5 flex flex-row w-[920px] border border-solid rounded">
                                    <div className="flex flex-1 gap-3">
                                        <img className="w-[32px] h-[32px]" src="/assets/icon/avatar.png" alt="" />
                                        <div className="flex flex-col ">
                                            <div className="flex flex-col gap-3">
                                                <span className="font-bold text-xl w-[280px]">Lorem ipsum dolor sit amet consectetur. </span>
                                                <small className="mb-3">Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                            </div>
                                            <div className="mb-3">
                                                <small className="font-bold border-r pr-1 border-solid border-black">By Boris.near</small>
                                                <small className="pl-1">2 hours ago</small>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img width={14} src="/assets/icon/add.svg" alt="" />
                                                    <small>Plus 3 More</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center flex-1 justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="h-[45px] w-[1px] bg-gray-300"></div>
                                            <div>
                                                <span>FUNDING NEED</span>
                                                <div className="flex items-center">
                                                    <img width={27} src="/assets/icon/dollar.svg" alt="" />
                                                    <span className="text-3xl font-bold text-blue-700">18,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 mr-5 px-2 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-row w-[920px] border border-solid rounded">
                                    <div className="flex flex-1 gap-3">
                                        <img className="w-[32px] h-[32px]" src="/assets/icon/avatar.png" alt="" />
                                        <div className="flex flex-col ">
                                            <div className="flex flex-col gap-3">
                                                <span className="font-bold text-xl w-[280px]">Lorem ipsum dolor sit amet consectetur. </span>
                                                <small className="mb-3">Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                            </div>
                                            <div className="mb-3">
                                                <small className="font-bold border-r pr-1 border-solid border-black">By Boris.near</small>
                                                <small className="pl-1">2 hours ago</small>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img width={14} src="/assets/icon/add.svg" alt="" />
                                                    <small>Plus 3 More</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center flex-1 justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="h-[45px] w-[1px] bg-gray-300"></div>
                                            <div>
                                                <span>FUNDING NEED</span>
                                                <div className="flex items-center">
                                                    <img width={27} src="/assets/icon/dollar.svg" alt="" />
                                                    <span className="text-3xl font-bold text-blue-700">18,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 mr-5 px-2 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div> 
                                <div className="p-5 flex flex-row w-[920px] border border-solid rounded">
                                    <div className="flex flex-1 gap-3">
                                        <img className="w-[32px] h-[32px]" src="/assets/icon/avatar.png" alt="" />
                                        <div className="flex flex-col ">
                                            <div className="flex flex-col gap-3">
                                                <span className="font-bold text-xl w-[280px]">Lorem ipsum dolor sit amet consectetur. </span>
                                                <small className="mb-3">Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                            </div>
                                            <div className="mb-3">
                                                <small className="font-bold border-r pr-1 border-solid border-black">By Boris.near</small>
                                                <small className="pl-1">2 hours ago</small>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img width={14} src="/assets/icon/add.svg" alt="" />
                                                    <small>Plus 3 More</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center flex-1 justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="h-[45px] w-[1px] bg-gray-300"></div>
                                            <div>
                                                <span>FUNDING NEED</span>
                                                <div className="flex items-center">
                                                    <img width={27} src="/assets/icon/dollar.svg" alt="" />
                                                    <span className="text-3xl font-bold text-blue-700">18,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 mr-5 px-2 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div> 
                                <div className="p-5 flex flex-row w-[920px] border border-solid rounded">
                                    <div className="flex flex-1 gap-3">
                                        <img className="w-[32px] h-[32px]" src="/assets/icon/avatar.png" alt="" />
                                        <div className="flex flex-col ">
                                            <div className="flex flex-col gap-3">
                                                <span className="font-bold text-xl w-[280px]">Lorem ipsum dolor sit amet consectetur. </span>
                                                <small className="mb-3">Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                            </div>
                                            <div className="mb-3">
                                                <small className="font-bold border-r pr-1 border-solid border-black">By Boris.near</small>
                                                <small className="pl-1">2 hours ago</small>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img width={14} src="/assets/icon/add.svg" alt="" />
                                                    <small>Plus 3 More</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center flex-1 justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="h-[45px] w-[1px] bg-gray-300"></div>
                                            <div>
                                                <span>FUNDING NEED</span>
                                                <div className="flex items-center">
                                                    <img width={27} src="/assets/icon/dollar.svg" alt="" />
                                                    <span className="text-3xl font-bold text-blue-700">18,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 mr-5 px-2 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div> 
                                <div className="p-5 flex flex-row w-[920px] border border-solid rounded">
                                    <div className="flex flex-1 gap-3">
                                        <img className="w-[32px] h-[32px]" src="/assets/icon/avatar.png" alt="" />
                                        <div className="flex flex-col ">
                                            <div className="flex flex-col gap-3">
                                                <span className="font-bold text-xl w-[280px]">Lorem ipsum dolor sit amet consectetur. </span>
                                                <small className="mb-3">Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque. </small>
                                            </div>
                                            <div className="mb-3">
                                                <small className="font-bold border-r pr-1 border-solid border-black">By Boris.near</small>
                                                <small className="pl-1">2 hours ago</small>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img src="/assets/icon/stack.svg" alt="" />
                                                    <small>DAO</small>
                                                </div>
                                                <div className="flex px-2 border border-solid rounded-2xl  ">
                                                    <img width={14} src="/assets/icon/add.svg" alt="" />
                                                    <small>Plus 3 More</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center flex-1 justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="h-[45px] w-[1px] bg-gray-300"></div>
                                            <div>
                                                <span>FUNDING NEED</span>
                                                <div className="flex items-center">
                                                    <img width={27} src="/assets/icon/dollar.svg" alt="" />
                                                    <span className="text-3xl font-bold text-blue-700">18,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex bg-white border border-solid border-black p-1 gap-1 mr-5 px-2 rounded-2xl">
                                            <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="" />
                                            <small>Dralf</small>
                                        </div>
                                    </div>
                                </div>  
                            </div> 
                            <div className="w-full bg-gray-200 flex justify-center items-center py-3 rounded-3xl">
                                <small className="font-bold">Load More</small>
                            </div>
                        </div>
                        <div>
                            <div className="w-96 flex flex-col gap-3 border-b border-gray-200 pb-10">
                                <div className="flex flex-col">
                                    <span className="text-xl text-[#57606A] font-semibold">Proposal Template</span>
                                    <div className="flex flex-col gap-3 mt-5">
                                        <ProposalTemplate/>
                                        <ProposalTemplate/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <span className="text-xl text-[#57606A] font-semibold">How it works</span>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-5 w-full">
                                            <div className="flex flex-col items-center">
                                                <img width={20} className="w-16 h-6" src="/assets/icon/checked.png" alt="icon" />
                                                <div className="h-full w-0.5 bg-[#0969DA]"/>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-[#24292F]">1. Loreum Ipsum</span>
                                                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Consectetur sem id est nam nam et vestibulum imperdiet a. A aliquet volutpat porta malesuada.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-5 w-full">
                                            <div className="flex flex-col items-center">
                                                <img width={20} className="w-16 h-5" src="/assets/icon/check.png" alt="icon" />
                                                <div className="h-full w-0.5 bg-[#0969DA]"/>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-[#24292F]">2. Loreum Ipsum</span>
                                                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Consectetur sem id est nam nam et vestibulum imperdiet a. A aliquet volutpat porta malesuada.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-5 w-full">
                                            <div className="flex flex-col items-center">
                                                <img width={20} className="w-16 h-5" src="/assets/icon/check.png" alt="icon" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-[#24292F]">3. Loreum Ipsum</span>
                                                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Consectetur sem id est nam nam et vestibulum imperdiet a. A aliquet volutpat porta malesuada.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects;