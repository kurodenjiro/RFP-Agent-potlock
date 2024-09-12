"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import SectionCreate from "@/components/SectionCreate";
const create_project = () =>{
    return(
        <div className="w-full h-full">
            <Header/>
            <SectionCreate title="Create Project" subtitle="Project"/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-10 mt-4 md:pb-20">
                    <div className="flex flex-col-reverse md:flex-row justify-between py-5">
                        <div className="flex flex-col w-full md:w-[1100px] gap-5">
                            <div className="py-5 md:hidden">
                                <div className="flex flex-col mt-4">
                                    <span className="font-bold">Category</span>
                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                    <div className="flex justify-between px-1 py-2 border border-solid">
                                        <span className="text-sm text-gray-400">Choose Category</span>
                                        <img width={16} src="/assets/icon/arrow-down-gray.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="font-bold">Title</span>
                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                    <div className="flex justify-between px-1 py-2 border border-solid">
                                        <span className="text-sm text-gray-400">Enter Title Here</span>
                                        <img width={16} src="/assets/icon/arrow-down-gray.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="font-bold">Summary</span>
                                    <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                    <div className="flex justify-between px-1 py-2 border border-solid">
                                        <span className="text-sm text-gray-400">Enter Summary Here </span>
                                        <img width={16} src="/assets/icon/arrow-down-gray.svg" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="w-100% h-full gap-5 flex md:flex-col flex-row justify-start md:justify-center items-center">
                                <div className="flex">
                                    <img className="w-[56px] md:w-[120px]" src="/assets/icon/avatar.png" alt="" />
                                    <img className="translate-x-[-20px] translate-y-[20px] md:translate-x-[-40px] md:translate-y-[40px] md:w-[40px] w-[19px]" src="/assets/icon/camera.svg" alt="" />
                                </div>
                                <small className="relative left-[-20px] text-base font-bold">Add member</small>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Project ID</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <input type="text"placeholder="Enter title here" className="text-sm px-1 py-2 focus outline-none border border-solid" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Project Name</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <input type="text"placeholder="Enter title here" className="text-sm px-1 py-2 focus outline-none border border-solid" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Category</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <div className="flex justify-between px-1 py-2 border border-solid">
                                    <span className="text-sm text-gray-400">Choose Category</span>
                                    <img width={16} src="/assets/icon/arrow-down-gray.svg" alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Why Do you consider yourself a public good</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <div className="flex items-start border border-solid h-[96px] px-1 py-2">
                                    <textarea placeholder="Enter response here." className="text-sm focus outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Description</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <div className="flex items-start border border-solid h-[96px] px-1 py-2">
                                    <textarea placeholder="Enter response here." className="text-sm focus outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Project Name</span>
                                <small className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Orci purus condimentum aliquet volutpat tincidunt semper. Eu eget arcu sodales at.</small>
                                <input type="text"placeholder="Enter title here" className="text-sm px-1 py-2 focus outline-none border border-solid" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Final Consent</span>
                                <div className="flex gap-2">
                                    <img src="/assets/icon/checkbox.svg" alt="" />
                                    <span>I’ve agree to AIPGF’s <Link href={''} className="font-bold underline">Terms and Conditions</Link> and commit to honoring it</span>
                                </div>
                                <div className="flex gap-2">
                                    <img src="/assets/icon/checkbox.svg" alt="" />
                                    <span>I’ve read AIPGF’s <Link href={''} className="font-bold underline">Code of Conduct</Link> and commit to honoring it</span>
                                </div>
                            </div>
                            <div className="flex gap-10 justify-end items-center">
                                <div className="text-gray-600">Discard Changes</div>
                                <div className="flex flex-row border border-solid justify-center items-center border-black rounded-3xl p-2">
                                    <div className="flex gap-2 px-3 border-r items-center border-black h-full">
                                        <div className="w-[8px] h-[8px] bg-slate-400 rounded-full"></div>
                                        <span className="hidden md:block">Create Project</span>
                                        <span className="md:hidden">Submit draft</span>
                                    </div>
                                    <div className="px-2">
                                        <img src="/assets/icon/arrow-down-gray.svg"width={20} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[500px]"> 
                            <div className="flex flex-col border-b border-solid">
                                <span className="text-gray-600 text-lg font-bold mt-2">Author Details</span>
                                <div className="flex flex-col py-3 gap-2">
                                    <span className="font-bold">
                                        Author
                                    </span>
                                    <div className="flex items-center">
                                        <img src="/assets/icon/avatar.png" alt="" />
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
                                                <Link className="text-sm font-bold" href={''}>genadrop-contract.nftgen.near</Link>
                                                <img src="/assets/icon/trash.svg" alt="" />
                                            </div>
                                            <div className="flex justify-between"> 
                                                <Link className="text-sm font-bold" href={''}>genadrop-contract.nftgen.near</Link>
                                                <img src="/assets/icon/trash.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <textarea placeholder="Enter Address" className="focus outline-none h-5 text-sm"></textarea>
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
                                                <Link className="text-sm font-bold" href={''}>https://github.com/Testproduct/v1-core.git</Link>
                                                <img src="/assets/icon/trash.svg" alt="" />
                                            </div>
                                            <div className="flex justify-between"> 
                                                <Link className="text-sm font-bold" href={''}>https://github.com/Testproduct/v1-core.git</Link>
                                                <img src="/assets/icon/trash.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <textarea placeholder="http://github.com/" className="focus outline-none h-5 text-sm"></textarea>
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
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <textarea placeholder="https://" className="focus outline-none h-5 text-sm"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Twitter</span>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <textarea placeholder="text_project" className="focus outline-none h-5 text-sm"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Telegram</span>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <textarea placeholder="text_project" className="focus outline-none h-5 text-sm"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Github</span>
                                        <div className="flex gap-2 p-2 border border-solid rounded-lg items-center">
                                            <span className="text-gray-300">@</span>
                                            <textarea placeholder="Enter Address" className="focus outline-none h-5 text-sm"></textarea>
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
export default create_project