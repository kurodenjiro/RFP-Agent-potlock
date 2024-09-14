"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionCreate from "@/components/SectionCreate";
import { useEffect, useState } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";


const Editor = dynamic(()=>import("@/components/Editor"),{ssr:false})


const CreateRFPs = () =>{
    const [description, setDescription] = useState<string|null>(null);
    const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [selectReview, setSelectReview] = useState<boolean>(false)
    const [isShowDropDownCurrency,setIsShowDropDownCurrency] = useState<boolean>(false)
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
            <SectionCreate title="Create RFPs" subtitle="RFPs"/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-10 mt-4 md:pb-20">
                    <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-10">
                        <div className="flex flex-row gap-4">
                            {
                                windowSize?.width > 768&&(
                                    <img width={20} className="w-10 h-10 rounded-full" src="/assets/avatar.png" alt="avatar" />
                                )
                            }
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-xl">Category</span>
                                    <small className="text-gray-400">Select the category to help users quickly understand the nature of the need. Need guidance? <Link href="#" className="font-semibold text-gray-600">See Funding Docs</Link>.</small>
                                    <div className="w-full relative">
                                        <button onClick={()=>setIsShowDropDown((prv)=>!prv)} className="w-full focus:border-gray-500 shadow-sm cursor-pointer mt-2 border borde-gray-300 rounded-lg flex flex-row justify-between px-3 py-2">
                                            <span className="text-sm md:text-base">Choose Category</span>
                                            <img width={20} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                        </button>
                                        {
                                            isShowDropDown&&(
                                                <div className="w-full absolute top-14 bg-white border border-gray-300 p-3 rounded-lg h-20 shadow-sm">

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-xl">Title</span>
                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                    <input className="w-full text-sm md:text-base rounded-lg px-3 py-2 outline-none border border-gray-300 shadow-sm focus:border-gray-500" type="text" placeholder="Enter Title Here"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-xl">Summary</span>
                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                    <textarea className="w-full text-sm md:text-base rounded-lg px-3 py-2 outline-none border border-gray-300 shadow-sm focus:border-gray-500 h-32 resize-none" placeholder="Enter Summary Here"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-xl">Description</span>
                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                    <Editor/>
                                </div>
                                <div className="flex flex-col gap-2 mt-16">
                                    <span className="font-semibold text-xl">Final Consent</span>
                                    <div className="flex flex-col gap-1 mt-2">
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor="hr"
                                                className="flex text-sm md:text-base flex-row text-wrap items-center gap-2.5 text-black cursor-pointer"
                                                >
                                                <input id="hr" type="checkbox" className="peer hidden" />
                                                <div
                                                    className="h-5 w-5 flex rounded-md border border-gray-200 peer-checked:bg-black transition shadow-sm"
                                                >
                                                    <svg
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 light:stroke-[#e8e8e8]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M4 12.6111L8.92308 17.5L20 6.5"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-row w-full">
                                                    <span>I&#39;ve agree to AIPGF&#39;s <strong className="underline">Terms and Conditions</strong> and commit to honoring it</span>
                                                </div>
                                            </label>
                                            <label
                                                htmlFor="hrs"
                                                className="flex text-sm md:text-base flex-row items-center gap-2.5 text-black cursor-pointer"
                                                >
                                                <input id="hrs" type="checkbox" className="peer hidden" />
                                                <div
                                                    className="h-5 w-5 flex rounded-md border border-gray-200 peer-checked:bg-black transition shadow-sm"
                                                >
                                                    <svg
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 light:stroke-[#e8e8e8]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M4 12.6111L8.92308 17.5L20 6.5"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-row w-full">
                                                    <span>I&#39;ve agree to AIPGF&#39;s <strong className="underline">Code of Conduct</strong> and commit to honoring it</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between w-full md:justify-end items-center md:gap-10 mt-10 pb-20">
                                    <button>
                                        <span className="text-[#818181] font-semibold md:text-base text-sm">Discard Changes</span>
                                    </button>
                                    <div className="border border-gray-200 rounded-full flex flex-row">
                                            <button className="flex md:text-base text-sm flex-row gap-2 px-3 py-2 items-center hover:bg-gray-100 rounded-l-full">
                                                {
                                                    selectReview?(
                                                        <div className="flex flex-row items-center gap-2">
                                                            <div className="w-2 h-2 bg-[#04A46E] rounded-full"/>
                                                            <span>Ready for review</span>
                                                        </div>
                                                    ):
                                                    (
                                                        <div className="flex flex-row items-center gap-2">
                                                            <div className="w-2 h-2 bg-[#979A9C] rounded-full"/>
                                                            <span>Submit draft</span>
                                                        </div>
                                                    )
                                                }
                                            </button>
                                            <button onClick={()=>setIsShow((prv)=>!prv)} className="border-l border-gray-200 px-3 py-2 hover:bg-gray-100 rounded-r-full">
                                                <img width={20} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                            </button>
                                        </div>
                                    <div className="relative">
                                        {
                                            isShow&&(
                                                <div className="absolute top-6 right-0">
                                                    <div className="border border-gray-300 shadow-sm p-3 rounded-lg w-64 bg-white md:text-base text-sm">
                                                        <div className="flex flex-col gap-2">
                                                            <button onClick={()=>setSelectReview(false)} className="flex flex-row gap-3 items-start text-start">
                                                                <div className="h-2 w-2 mt-1">
                                                                    <div className="w-2 h-2 bg-[#979A9C] rounded-full"/>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <small className="font-semibold">Submit draft</small>
                                                                    <p className="text-xs">The author can still edit the proposal and build consensus before sharing it with sponsors.</p>
                                                                </div>
                                                            </button>
                                                            <div className="w-full border border-gray-200 h-0.5"/>
                                                            <button onClick={()=>setSelectReview(true)} className="flex flex-row gap-3 items-start  text-start">
                                                                <div className="h-2 w-2 mt-1">
                                                                    <div className="w-2 h-2 bg-[#04A46E] rounded-full"/>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <small className="font-semibold">Ready for review</small>
                                                                    <p className="text-xs">Start the official review process with sponsors. This will lock the editing function, but comments are still open.</p>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="md:w-96">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-between items-center pb-5">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-lg md:text-xl text-[#57606A] font-semibold">Submission Deadline</span>
                                        <small className="text-gray-400">Enter the deadline for submitting proposals.</small>
                                        <div className="flex fle-row gap-3 border border-gray-300 rounded-lg p-3 py-2">
                                            <input type="date" className="outline-none w-full placeholder:text-gray-400" placeholder="Choose date"/>
                                        </div>
                                    </div>
                                    {
                                        windowSize?.width < 768&&(
                                            <button onClick={()=>setViewAuthorDetails((prv)=>!prv)}>
                                                <img width={22} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="w-full h-0.5 bg-gray-200"/>
                                <div className="mt-5">
                                    <div className="flex flex-row justify-between items-center pb-3 md:pb-0">
                                        <span className="text-lg md:text-xl text-[#57606A] font-semibold">Timeline</span>
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
                                            <div className="flex flex-col gap-2 mt-3 pb-5">
                                                <div className="flex flex-col gap-3">
                                                    <span>Status</span>
                                                    <button onClick={()=>setIsShowDropDownCurrency((prv)=>!prv)} className="border border-gray-200 rounded-lg p-2 px-3 flex flex-row justify-between gap-3">
                                                        <span className="text-[#6f7479] text-sm md:text-base">Accepting Submission</span>
                                                        <img width={20} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                                    </button>
                                                    {
                                                        isShowDropDownCurrency&&(
                                                            <div className="relative">
                                                                <div className="w-full absolute -top-2 bg-white border border-gray-300 p-3 rounded-lg shadow-sm flex flex-col justify-start items-start">
                                                                    <button className="hover:bg-gray-100 p-2 w-full rounded-lg text-start">
                                                                        <span>Accepting Submission</span>
                                                                    </button>
                                                                    <button className="hover:bg-gray-100 p-2 w-full rounded-lg text-start">
                                                                        <span>Evaluation</span>
                                                                    </button>
                                                                    <button className="hover:bg-gray-100 p-2 w-full rounded-lg text-start">
                                                                        <span>Decision</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="mt-5 flex flex-col gap-1">
                                                    <div className="flex flex-col gap-5 ml-5">
                                                        <div className="flex flex-col gap-2">
                                                            <div className="flex flex-row gap-2 w-full">
                                                                <div className="flex flex-col items-center gap-1 mt-3">
                                                                    <div className="border border-orange-500 rounded-full h-6 w-4"/>
                                                                    <div className="h-full w-0.5 bg-gray-300"/>
                                                                </div>
                                                                <div className="flex flex-col gap-1 bg-orange-200 bg-opacity-30 p-2 rounded-lg">
                                                                    <div className="flex flex-col gap-1">
                                                                        <span className="font-semibold text-[#24292F]">1. Accepting Submissions</span>
                                                                        <p className="text-xs">During this stage, the RFP is still open for submissions.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row gap-2 w-full">
                                                                <div className="flex flex-col items-center gap-1 mt-5">
                                                                    <div className="border-2 border-gray-400 rounded-full h-5 w-4"/>
                                                                    <div className="h-full w-0.5 bg-gray-300"/>
                                                                </div>
                                                                <div className="flex flex-col gap-1 p-2">
                                                                    <div className="flex flex-col gap-1">
                                                                        <span className="font-semibold text-[#24292F]">2. Evaluation</span>
                                                                        <p className="text-xs">This RFP is closed for submissions. All submitted proposals are under review.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row gap-2 w-full">
                                                                <div className="flex flex-col items-center gap-1 mt-5">
                                                                    <div className="border-2 border-gray-400 rounded-full h-4 w-4"/>
                                                                </div>
                                                                <div className="flex flex-col gap-1 p-2">
                                                                    <div className="flex flex-col gap-1">
                                                                        <span className="font-semibold text-[#24292F]">3. Decision</span>
                                                                        <p className="text-xs">Sponsor makes a final decision:</p>
                                                                        <div className="flex flex-col gap-1">
                                                                            <div className="flex flex-row gap-1 items-center">
                                                                                <div className="border-2 border-gray-400 rounded-full h-3 w-3"/>
                                                                                <small className="text-xs font-semibold">Proposal Selected</small>
                                                                            </div>
                                                                            <div className="flex flex-row gap-1 items-center">
                                                                                <div className="border-2 border-gray-400 rounded-full h-3 w-3"/>
                                                                                <small className="text-xs font-semibold">RFP Canceled</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
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

export default CreateRFPs;