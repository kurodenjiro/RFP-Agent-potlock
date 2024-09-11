"use client"
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Template from "@/components/Template";
import Section from "@/components/Section";
import Link from "next/link";
import { useEffect, useState } from "react";
import Project from "@/components/Project";


const Projects = () =>{

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
            <Section title="Projects"/>
            <div className="flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 w-full md:mt-10 mt-4 pb-20">
                    <div className="flex flex-col md:gap-10 gap-4 px-5 md:px-0">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-row gap-2 md:gap-4 text-xs md:text-2xl">
                                <div className="flex flex-row md:gap-2 gap-1">
                                    <span className="font-semibold">$53,000,00</span>
                                    <span>Total Awarded</span>
                                </div>
                                <div className="flex flex-row md:gap-2 gap-1">
                                    <span className="font-semibold">200</span>
                                    <span>RFPs</span>
                                </div>
                                <div className="flex flex-row md:gap-2 gap-1">
                                    <span className="font-semibold">400</span>
                                    <span>Non RFPs</span>
                                </div>
                            </div>
                            {
                                windowSize?.width > 768 &&(
                                    <Link href={"/projects/create-project"} className="flex flex-row gap-2 p-3 rounded-full bg-[#0969DA] text-white hover:bg-opacity-90">
                                        <img width={16} src="/assets/icon/add-white.svg" alt="icon" />
                                        <span>Submit Proposal</span>
                                    </Link>
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <span className="text-xl md:text-2xl font-semibold">
                                Featured Projects
                            </span>
                            <div className="flex flex-row gap-5 max-w-sm md:max-w-screen-2xl overflow-y-auto w-full">
                                <FeaturedProject/>
                                <FeaturedProject/>
                                <FeaturedProject/>
                            </div>
                        </div>
                    </div>  
                    <div className="mt-10 flex flex-col md:flex-row justify-between md:gap-10 px-5 md:px-0">
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-bold">ALL PROJECT</span>
                            <div className="flex flex-col gap-3">
                                <Project/>
                                <Project/>
                                <Project/>
                                <Project/>
                                <Project/>
                            </div> 
                            <button className="w-full cursor-pointer bg-gray-200 flex justify-center items-center py-3 rounded-3xl">
                                <small className="font-bold">Load More</small>
                            </button>
                        </div>
                        <div className="md:w-96 mt-5 md:mt-0">
                            <div className="w-full md:w-96 flex flex-col gap-3 border-b border-gray-200 pb-10">
                                <div className="flex flex-col">
                                    <span className="text-xl text-[#57606A] font-semibold">Project Template</span>
                                    <div className="flex flex-col gap-3 mt-5">
                                        <Template/>
                                        <Template/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <span className="text-xl text-[#57606A] font-semibold">How it works</span>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-5 w-full">
                                            <div className="flex flex-col items-center">
                                                <img width={20} className="w-10 h-4" src="/assets/icon/checked.png" alt="icon" />
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
                                                <img width={20} className="w-10 h-4" src="/assets/icon/check.png" alt="icon" />
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
                                                <img width={20} className="w-10 h-4" src="/assets/icon/check.png" alt="icon" />
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