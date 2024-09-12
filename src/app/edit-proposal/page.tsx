"use client"
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionCreate from "@/components/SectionCreate";
import Link from "next/link";
const EditProposal = () =>{
    const [viewAuthorDetails,setViewAuthorDetails] = useState<boolean>(false)
    const [viewFundingDetails,setViewFundingDetails] = useState<boolean>(false)

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
        <div className="w-full h-full">
            <Header/>
            <SectionCreate title="Edit Proposal" subtitle="Proposal"/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-10 mt-4 md:pb-20">
                    <div className="flex flex-col gap-2 border border-gray-400 p-5 rounded-lg shadow-sm">
                        <div className="flex gap-2 bg-gray-300 px-2 py-2 w-[100px] justify-center items-center rounded-2xl">
                            <img width={16} src="/assets/icon/pen.svg" alt="menu" />
                            <span className="text-sm text-gray-500">Draft</span>
                        </div>
                        <div className="flex flex-col md:flex-row w-full justify-between items-start">
                            <div className="max-w-3xl flex flex-col gap-2 ">
                                <span className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.  sagittis liquam justo purus dictum mi justo </span>
                                <small><strong>example.near</strong> created on April 5, 2024 15:30 UTC</small>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-5 w-full">
                        <div className="flex flex-col gap-5">
                            <div className="w-full flex flex-row gap-5">
                                <img width={30} className="w-10 h-10 rounded-full hidden md:block   " src="/assets/avatar.png" alt="avatar" />
                                <div className="flex flex-col">
                                    <div className="flex flex-col border border-gray-300 rounded-lg gap-3 w-full">
                                        <div className="flex flex-row w-full justify-between bg-gray-100 p-5 ">
                                            <div className="flex gap-4">
                                                <span><strong>Pulg.near</strong> created RFP</span>
                                                <div className="flex gap-1">
                                                    <span>1d ago</span>
                                                    <img width={12} src="/assets/icon/clock-gray.svg" alt="clock" />
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="text-sm px-2 py-1 border border-solid rounded-xl">Author</button>
                                                <img width={20} src="/assets/icon/option.svg" alt="option" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 p-3">
                                            <span className="font-semibold px-2 pb-1 border-b border-gray-200">RFP CATEGORY</span>
                                            <div className="flex gap-3 px-3 py-2 w-full border border-solid rounded-lg bg-[#F8F8F8]">
                                                <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-gray-200">
                                                    <img src="/assets/icon/sparkle.svg" alt="" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold">Project Category</span>
                                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. </small>
                                                </div>
                                            </div>
                                        <div className="flex flex-col gap-5 mt-5">
                                                <div className="flex flex-col gap-3">
                                                    <span className="font-semibold px-2 pb-1 border-b border-gray-200">SUMMARY</span>
                                                    <span className="px-2">Lorem ipsum dolor sit amet consectetur. Eu sit aliquam cras tristique integer enim. Dignissim vitae euismod id viverra morbi laoreet. Faucibus etiam sed dictum nunc lacus ut amet. Pretium velit in ante ac ullamcorper. Sed diam dolor ut sed sed. Rhoncus gravida sem ac viverra enim duis. Purus ac blandit quis a.</span>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span className="font-semibold px-2 pb-1 border-b border-gray-200">DESCRIPTION</span>
                                                    <div className="flex flex-col gap-10">
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-2xl font-semibold">Request</span>
                                                            <span>Lorem ipsum dolor sit amet consectetur. Tristique hac mattis convallis nec nam. Aliquam facilisi morbi velit nibh risus. Mi imperdiet iaculis integer at pharetra magna dictum nam nibh. Metus vulputate diam nibh quis ultrices ornare. Vivamus tempor massa a ut diam est. Nibh tempor consequat nunc ac commodo neque ligula in faucibus. Malesuada ipsum mattis nisl eu proin ultricies.
            Neque proin lorem justo pellentesque nec in sed vestibulum. Dui vivamus convallis tristique at sed duis nibh ut. Blandit elit nunc nibh mi viverra suspendisse. Vivamus sagittis lacus etiam ac viverra. </span>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-2xl font-semibold">Bidding Process</span>
                                                            <span>Lorem ipsum dolor sit amet consectetur. Tristique hac mattis convallis nec nam. Aliquam facilisi morbi velit nibh risus. Mi imperdiet iaculis integer at pharetra magna dictum nam nibh. Metus vulputate diam nibh quis ultrices ornare. Vivamus tempor massa a ut diam est. Nibh tempor consequat nunc ac commodo neque ligula in faucibus. Malesuada ipsum mattis nisl eu proin ultricies.
            Neque proin lorem justo pellentesque nec in sed vestibulum. Dui vivamus convallis tristique at sed duis nibh ut. Blandit elit nunc nibh mi viverra suspendisse. Vivamus sagittis lacus etiam ac viverra. </span>    
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-2xl font-semibold">Selection Process</span>
                                                            <span>Lorem ipsum dolor sit amet consectetur. Tristique hac mattis convallis nec nam. Aliquam facilisi morbi velit nibh risus. Mi imperdiet iaculis integer at pharetra magna dictum nam nibh. Metus vulputate diam nibh quis ultrices ornare. Vivamus tempor massa a ut diam est.  </span>    
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-2xl font-semibold">Funding Process</span>
                                                            <span>Lorem ipsum dolor sit amet consectetur. Tristique hac mattis convallis nec nam. Aliquam facilisi morbi velit nibh risus. Mi imperdiet iaculis integer at pharetra magna dictum nam nibh. Metus vulputate diam nibh quis ultrices ornare. Vivamus tempor massa a ut diam est.  </span>    
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-2xl font-semibold">Points of Contact</span>
                                                            <div>
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                                                    <span>Lorem ipsum dolor sit amet consectetur. </span>
                                                                </div>
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                                                    <span>Tristique hac mattis convallis nec nam. </span>
                                                                </div>
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                                                    <span>Aliquam facilisi morbi velit nibh risus.  </span>
                                                                </div>
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                                                    <span>Mi imperdiet iaculis integer at pharetra magna dictum nam nibh. </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row gap-5 mt-3 items-center">
                                                        <div className="flex flex-row gap-1 items-center">
                                                            <img width={15} src="/assets/icon/heart.svg" alt="icon" />
                                                            <small className="text-gray-500 font-semibold text-xs">3</small>
                                                        </div>
                                                        <div className="flex flex-row gap-1 items-center">
                                                            <img width={15} src="/assets/icon/comment.svg" alt="icon" />
                                                            <small className="text-gray-500 font-semibold text-xs">0</small>
                                                        </div>
                                                        <div className="flex flex-row gap-1 items-center">
                                                            <img width={18} src="/assets/icon/link.svg" alt="icon" />
                                                            <small className="text-gray-500 font-semibold text-xs">0</small>
                                                        </div>
                                                        <div className="flex flex-row gap-1 items-center">
                                                            <img width={20} src="/assets/icon/share.svg" alt="icon" />
                                                            <small className="text-gray-500 font-semibold text-xs">0</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                        </div>

                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="w-[2px] h-[26px] bg-gray-300"></div>
                                            <div className="w-[36px] h-[36px] flex justify-center items-center bg-gray-300 rounded-full ">
                                                <img width={20} src="/assets/icon/flag.svg" alt="" />
                                            </div>
                                            <div className="w-[2px] h-[26px] bg-gray-300"></div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img width={20} className="w-8 h-8 rounded-full" src="/assets/avatar.png" alt="avatar" />
                                            <span><strong>Pulg.near</strong> edited the RFP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[200px] bg-slate-400">
                                

                            </div>
                            <div className="bg-[#0969DA] bg-opacity-10 w-full px-10 md:px-20 py-5 rounded-xl  my-5 flex flex-col md:flex-row md:justify-between md:items-center">
                                <div className="flex flex-col md:w-[590px] gap-2">
                                    <span className="text-xl"><strong>Want to respond to this RFP?.</strong> This RFP is accepting submissions.</span>
                                </div>
                                <Link href={"/proposals/create-proposal"} className="flex flex-row gap-2 p-3 rounded-full bg-[#0969DA] text-white hover:bg-opacity-90">
                                    <img width={16} src="/assets/icon/add-white.svg" alt="icon" />
                                    <span>Submit Proposal</span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-[100rem]">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between items-center">
                                    <span className="text-lg md:text-xl text-[#57606A] font-semibold">Author Details</span>
                                    {
                                        windowSize?.width < 768&&(
                                            <button onClick={()=>setViewAuthorDetails((prv)=>!prv)}>
                                                <img width={22} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                            </button>
                                        )
                                    }
                                </div>
                                {
                                    !viewAuthorDetails&&(
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-col gap-2 pb-3">
                                                <span className="font-semibold">Author</span>
                                                <div className="flex flex-row gap-2">
                                                    <img width={20} className="rounded-full" src="/assets/avatar.png" alt="avatar" />
                                                    <small>Adrian Robison</small>
                                                </div>
                                            </div>
                                            <div className="w-full h-0.5 bg-gray-200"/>
                                            <div className="flex flex-col gap-2 pb-5">
                                                <span className="font-semibold">Link Proposals (Optional)</span>
                                                <small>Link any relevant proposals(e.g Previous milestones).</small>
                                                <div className="flex flex-row gap-2 items-center md:items-start w-full justify-between">
                                                    <div className="flex flex-row gap-2 items-center">
                                                        <img width={20} className="w-7 h-7 rounded-full" src="/assets/avatar.png" alt="avatar" />
                                                        <div className="flex flex-col">
                                                            <small>#170: PotLock & Agentoor Contributor&#39;s Report</small>
                                                            <small className="text-xs">created on April 28, 2024 15:30 UTC</small>
                                                        </div>
                                                    </div>
                                                    <button>
                                                        <img width={14} src="/assets/icon/delete.svg" alt="icon" />
                                                    </button>
                                                </div>
                                                <div className="flex flex-row h-full w-full justify-between border border-gray-200 p-2 px-3 rounded-lg">
                                                    <input type="text" className="outline-none md:text-base text-sm" placeholder="Search Proposal"/>
                                                    <img width={windowSize?.width < 768?17:23} src="/assets/icon/arrow-down-gray.svg" alt="arrow" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="w-full h-0.5 bg-gray-200"/>
                                <div className="mt-5">
                                    <div className="flex flex-row justify-between items-center pb-3 md:pb-0">
                                        <span className="text-lg md:text-xl text-[#57606A] font-semibold">Funding Details</span>
                                        {
                                            windowSize?.width < 768&&(
                                                <button onClick={()=>setViewFundingDetails((prv)=>!prv)}>
                                                    <img width={22} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                                </button>
                                            )
                                        }
                                    </div>
                                    {
                                        !viewFundingDetails&&(
                                            <div className="flex flex-col gap-3 mt-3 pb-5">
                                                <span>Recipient NEAR Wallet Address</span>
                                                <small>Enter the address that will receive the funds. We&#39;ll need this to send a test transaction once your proposal is approved.</small>
                                                <div className="flex flex-row gap-2 items-center md:gap-3 border border-gray-200 rounded-lg p-2 px-3 mt-3">
                                                    <span className="text-[#6f7479] md:text-base text-sm">@</span>
                                                    <input type="text" className="outline-none md:text-base text-sm" placeholder="Enter Address"/>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span>Total Amount (USD)</span>
                                                    <small className="text-xs">Enter the exact amount you are requesting in USD. See <strong>Funding Documentation</strong> for guidelines.</small>
                                                    <div className="border border-gray-200 rounded-lg p-2 px-3 flex flex-row gap-2 items-center md:gap-3">
                                                        <span className="text-[#6f7479] md:text-base text-sm">$</span>
                                                        <input type="text" className="outline-none md:text-base text-sm" placeholder="0.00" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span>Currency</span>
                                                    <small className="text-xs">Select your preferred currency for receiving funds. Note: The exchange rate for NEAR tokens will be the closing rate at the day of the invoice.</small>
                                                    <button className="border border-gray-200 rounded-lg p-2 px-3 flex flex-row justify-between gap-3">
                                                        <span className="text-[#6f7479] text-sm md:text-base">USDC</span>
                                                        <img width={20} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                                    </button>
                                                    
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span>Requested Sponsor</span>
                                                    <div className="border border-gray-200 rounded-lg p-2 px-3 flex flex-row gap-2 items-center md:gap-3">
                                                        <span className="text-[#6f7479] md:text-base text-sm">@</span>
                                                        <input type="text" className="outline-none md:text-base text-sm" placeholder="CreativeDAO" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span>Supervisor (Optional)</span>
                                                    <div className="border border-gray-200 rounded-lg p-2 px-3 flex flex-row gap-2 items-center md:gap-3">
                                                        <span className="text-[#6f7479] md:text-base text-sm">@</span>
                                                        <input type="text" className="outline-none md:text-base text-sm" placeholder="Plug.near" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="w-full h-0.5 bg-gray-200"/>
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

export default EditProposal;