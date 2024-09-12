import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
const Submission = () =>{
    return(
        <div className="w-full h-full">
            <Header/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-10 mt-4 md:pb-20">
                    <div className="flex flex-col gap-2 border border-gray-400 p-5 rounded-lg shadow-sm">
                        <div className="flex gap-2 bg-gray-300 px-2 py-2 w-[200px] rounded-2xl">
                            <img width={16} src="/assets/icon/menu.svg" alt="menu" />
                            <span className="text-sm text-gray-500">Accepting Submission </span>
                        </div>
                        <div className="flex flex-col md:flex-row w-full justify-between items-start">
                            <div className="max-w-3xl flex flex-col gap-2 ">
                                <span className="text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur.  sagittis liquam justo purus dictum mi justo </span>
                                <small><strong>example.near</strong> created on April 5, 2024 15:30 UTC</small>
                            </div>
                            <button className="bg-gray-200 border border-solid border-gray-500 md:bg-black md:text-white font-bold py-1 rounded-full px-6">
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#0969DA] bg-opacity-10 w-full p-5 rounded-lg mt-5 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">This RFP is accepting submissions.</span>
                            <small>Click Submit Proposal if you want to submit a proposal. </small>
                        </div>
                        <Link href={"/proposals/create-proposal"} className="flex flex-row w-[200px]  justify-center gap-2 p-3 rounded-full bg-[#0969DA] text-white hover:bg-opacity-90">
                            <img width={16} src="/assets/icon/add-white.svg" alt="icon" />
                            <span>Submit Proposal</span>
                        </Link>
                    </div>
                    {/* COntainer */}
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
                                            <img width={20} src="/assets/icon/option.svg" alt="option" />
                                        </div>
                                        <div className="flex flex-col gap-2 p-3">
                                            <span className="font-semibold px-2 pb-1 border-b border-gray-200">RFP Category</span>
                                            <div className="flex gap-2">
                                                <div className="flex flex-row gap-1 items-center bg-[#F2CE8F] p-1 px-2 rounded-full">
                                                    <img width={14} src="/assets/icon/mvp.svg" alt="icon" />
                                                    <small className="text-[#24292F] text-[10px]">MVP</small>
                                                </div>
                                                <div className="bg-[#B4D1C4] flex flex-row gap-1 p-2 rounded-full w-34 h-8 items-center">
                                                    <img width={17} src="/assets/icon/money.svg" alt="icon" />
                                                    <small className="text-xs">Bounty</small>
                                                </div>
                                                <div className="bg-[#0747BC] flex flex-row gap-1 p-2 rounded-full text-white w-34 h-8 items-center">
                                                    <img width={17} src="/assets/icon/clock.svg" alt="icon" />
                                                    <small className="text-xs">Quick Start</small>
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
                            <div className="bg-[#0969DA] bg-opacity-10 w-full px-10 md:px-20 py-5 rounded-xl my-5 flex flex-col md:flex-row md:justify-between md:items-center">
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
                            <div className="border-b border-solid border-gray-300 py-5 md:py-10 flex flex-col gap-3 text-lg">
                                <span className="font-bold text-gray-500" > Submission Deadline</span>
                                <span className="font-bold">April 20, 2024</span>
                            </div>
                            <div className="mt-10">
                                <div className="flex flex-col border-b border-solid border-gray-300 gap-5 ">
                                    <span className="text-lg font-semibold text-gray-500">
                                        Timeline
                                    </span>
                                    <div className="flex flex-row items-center gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="w-[20px] h-[20px] border border-solid rounded-full border-orange-400"></div>
                                            <div className="w-[2px] h-[68px] bg-gray-300"></div>
                                            <div className="w-[20px] h-[20px] border border-solid rounded-full"></div>
                                            <div className="w-[2px] h-[68px] bg-gray-300"></div>
                                            <div className="w-[20px] h-[20px] border border-solid rounded-full"></div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col gap-2 rounded-lg p-4 bg-[#FEF6EE]">
                                                <span className="font-bold text-lg">1. Accepting Submissions</span>
                                                <span className="text-sm">During this stage, the RFP is still open for submissions.</span>
                                            </div>
                                            <div className="flex flex-col gap-2 rounded-lg p-4 ">
                                                <span className="font-bold text-lg">2. Evaluation</span>
                                                <span className="text-sm">This RFP is closed for submissions. All submitted proposals are under review..</span>
                                            </div>
                                            <div className="flex flex-col gap-2 rounded-lg p-4">
                                                <span className="font-bold text-lg">3. Decision</span>
                                                <span className="text-sm">Sponsor makes a final decision:.</span>
                                                <ul className="text-sm">
                                                    <li>Proposal Selected</li>
                                                    <li>RFP Canceled</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-5 border-b border-solid border-gray-300">
                                    <span className="text-lg mt-5 text-gray-500 font-semibold">Selected Proposal</span>
                                    <small className="text-gray-500">The Proposal(s) chosen </small>
                                    <span className="text-gray-600">None yet.</span>  
                                </div>
                                <div className="flex  flex-col gap-5 py-5 border-b border-solid border-gray-300">
                                    <div>
                                        <span className="text-lg mt-5 text-gray-500 font-semibold">All Proposals (5)</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row items-center gap-2">
                                            <img width={32} className="rounded-full w-[32px] h-[32px]" src="/assets/avatar.png" alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500">Proposal 1</span>
                                                <small className="text-gray-500">created on Oct 28, 2023 15:30 UTC</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img width={32} className="rounded-full w-[32px] h-[32px]" src="/assets/avatar.png" alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500">Proposal 1</span>
                                                <small className="text-gray-500">created on Oct 28, 2023 15:30 UTC</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img width={32} className="rounded-full w-[32px] h-[32px]" src="/assets/avatar.png" alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500">Proposal 1</span>
                                                <small className="text-gray-500">created on Oct 28, 2023 15:30 UTC</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img width={32} className="rounded-full w-[32px] h-[32px]" src="/assets/avatar.png" alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500">Proposal 1</span>
                                                <small className="text-gray-500">created on Oct 28, 2023 15:30 UTC</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <img width={32} className="rounded-full w-[32px] h-[32px]" src="/assets/avatar.png" alt="" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500">Proposal 1</span>
                                                <small className="text-gray-500">created on Oct 28, 2023 15:30 UTC</small>
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

export default Submission;