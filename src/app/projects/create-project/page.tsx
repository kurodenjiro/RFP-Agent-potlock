"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import SectionCreate from "@/components/SectionCreate";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateProject = () =>{
    const [description, setDescription] = useState<string|null>(null)
    const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false)
    const [selectReview, setSelectReview] = useState<boolean>(false)
    const [isShow,setIsShow] = useState<boolean>(false)

    return(
        <div className="w-full h-full">
            <Header/>
            <SectionCreate title="Create Project" subtitle="Project"/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-10 mt-4 md:pb-20">
                    <div className="flex flex-col-reverse md:flex-row md:gap-20 justify-between py-5">
                        <div className="flex flex-col w-full gap-3 md:mt-0 mt-5">
                            <div className="w-full h-full gap-5 flex md:flex-col flex-row justify-start md:justify-center items-center">
                                <div className="flex">
                                    <img className="w-[56px] md:w-[120px] rounded-full" src="/assets/avatar.png" alt="avatar" />
                                    <img className="translate-x-[-20px] translate-y-[20px] md:translate-x-[-40px] md:translate-y-[40px] md:w-[40px] w-[19px]" src="/assets/icon/camera.svg" alt="icon" />
                                </div>
                                <small className="relative left-[-20px] text-base font-bold">Add member</small>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-lg">Project ID</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <input type="text"placeholder="Enter title here" className="text-sm px-3 py-2 focus outline-none border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-lg">Project Name</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <input type="text"placeholder="Enter project here" className="text-sm px-3 py-2 focus outline-none border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-lg">Category</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <button onClick={()=>setIsShowDropDown((prv)=>!prv)} className="flex justify-between px-3 py-2 border border-gray-300 rounded-lg cursor-pointer">
                                    <span className="text-sm text-gray-400">Choose Category</span>
                                    <img width={16} src="/assets/icon/arrow-down-gray.svg" alt="icon" />
                                </button>
                                <div className="relative">
                                    {
                                        isShowDropDown&&(
                                            <div className="w-full absolute -top-1 bg-white border border-gray-300 p-3 rounded-lg h-20 shadow-sm">

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-lg">Why Do you consider yourself a public good</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <textarea placeholder="Enter response here." className="text-sm focus outline-none border border-gray-300 rounded-lg resize-none h-44 px-3 py-2" />
                            </div>
                            <div className="flex flex-col gap-2 pb-16 md:pb-10">
                                <span className="font-bold text-lg">Description</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <ReactQuill theme="snow" className="h-44 text-sm md:text-base" value={description?description:""} onChange={setDescription} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-lg">Project Name</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <input type="text"placeholder="Enter title here" className="text-sm px-3 py-2 focus outline-none border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
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
                        <div className="w-full md:w-[30rem]"> 
                            <div className="flex flex-col border-b border-solid">
                                <span className="text-gray-600 text-lg font-bold mt-2">Author Details</span>
                                <div className="flex flex-col py-3 gap-2">
                                    <span className="font-bold">
                                        Author
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <img width={28} className="rounded-full" src="/assets/avatar.png" alt="avatar" />
                                        <span className="text-gray-500">Adrian Robinson</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <span className="py-[20px] font-bold text-gray-500">
                                        Smart Contract Address
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <span>Wallet Address</span>
                                        <span className="text-sm text-gray-300">Enter the address that where your smart contract is saved.</span>
                                        <div className="flex flex-col gap-2 p-2">
                                            <div className="flex justify-between"> 
                                                <Link className="text-sm font-bold" href={'#'}>genadrop-contract.nftgen.near</Link>
                                                <img src="/assets/icon/trash.svg" alt="icon" />
                                            </div>
                                            <div className="flex justify-between"> 
                                                <Link className="text-sm font-bold" href={'#'}>genadrop-contract.nftgen.near</Link>
                                                <img src="/assets/icon/trash.svg" alt="icon" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <input type="text" placeholder="Enter Address" className="focus outline-none h-5 text-sm w-full"/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="border-b border-solid pb-5">
                                    <span className="mt-10 font-bold text-gray-500">
                                        Open source repositories
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm text-gray-300">Enter the address that where your smart contract is saved.</span>
                                        <div className="flex flex-col gap-2 p-2">
                                            <div className="flex justify-between"> 
                                                <Link className="text-sm font-bold" href={'#'}>https://github.com/Testproduct/v1-core.git</Link>
                                                <img src="/assets/icon/trash.svg" alt="icon" />
                                            </div>
                                            <div className="flex justify-between"> 
                                                <Link className="text-sm font-bold" href={'#'}>https://github.com/Testproduct/v1-core.git</Link>
                                                <img src="/assets/icon/trash.svg" alt="icon" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 p-2 px-3 border border-solid rounded-lg items-center">
                                            <input type="text" placeholder="http://github.com/" className="focus outline-none h-5 text-sm"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-solid pb-5">
                                    <div className="flex flex-col">
                                        <span className="text-xl">Social Links</span>
                                        <span className="text-sm text-gray-400">At least one link is required</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Website</span>
                                        <div className="flex gap-2 p-2 px-3 border border-solid rounded-lg items-center">
                                            <input type="text" placeholder="https://" className="focus outline-none h-5 text-sm"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Twitter</span>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <input type="text" placeholder="text_project" className="focus outline-none h-5 text-sm"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Telegram</span>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <input type="text" placeholder="text_project" className="focus outline-none h-5 text-sm"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Github</span>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <input type="text" placeholder="Enter Address" className="focus outline-none h-5 text-sm"/>
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
export default CreateProject;