"use client"
import { useEffect, useState } from "react";
import ActiveCard from "./ActiveCard";
import BrowserIdeas from "./BrowserIdeas";
import ProjectCard from "./ProjectCard";
import Questions from "./Questions";

const Container = () =>{
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

    const projectList = [
        {
            icon: "writer",
            title: "RFP Proposal Generator",
            description: "Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  ",
            author: "Boris.near",
            time: "2 hours ago",
            tags: ["Example","Example"]
        },
        {
            icon: "star",
            title: "Project Recommendation",
            description: "Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  ",
            author: "Boris.near",
            time: "2 hours ago",
            tags: ["Example","Example"]
        },
        {
            icon: "copy",
            title: "CopyGiving",
            description: "Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  Loreum Ipsum Dolor  ",
            author: "Boris.near",
            time: "2 hours ago",
            tags: ["Example","Example"]
        }
    ]
    console.log(windowSize)

    return(
        <div className="flex flex-col mt-10 md:mt-28 w-full">
            <div className="flex flex-col gap-10 items-center w-full">
                <span className="text-2xl font-bold">Building with the Best</span>
                <div className="flex flex-row gap-5 md:gap-28 items-center">
                    <img width={windowSize?.width <= 768?100:220} src={`/assets/logo/potlock.svg`} alt="potlock" />
                    <img width={windowSize?.width <= 768?45:140} src={`/assets/logo/near.svg`} alt="near" />
                    <img width={windowSize?.width <= 768?80:220} src={`/assets/logo/masa.svg`} alt="potlock" />
                    <img width={windowSize?.width <= 768?80:220} src={`/assets/logo/gitcoin.svg`} alt="gitcoin" />
                </div>
            </div>
            <div className="mt-7 md:mt-14">
                <div className="border border-gray-300 rounded-lg p-3 md:px-6 flex flex-col md:flex-row gap-1 md:gap-10 md:items-center shadow-sm">
                    <span className="font-semibold text-xl lg:text-4xl">What is AI-PGF</span>    
                    <p className="md:max-w-4xl text-sm md:text-lg">we're redefining grant funding by leveraging AI to streamline workflows, reduce overhead, and ensure promising projects receive timely support.</p>
                </div>
            </div>
            <div className="mt-7 md:mt-14 flex flex-row gap-10 flex-wrap w-full items-center justify-center">
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-3 md:p-8 md:gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col md:gap-20 gap-10">
                        <span className="text-2xl md:text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Funding Innovation Community</span>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-20 md:w-24 border border-gray-300">
                            <span className="text-sm md:text-lg">Join</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={windowSize?.width <= 768?160:260} src="/assets/icon/group.svg" alt="group" />
                </div>
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-3 md:p-8 md:gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col md:gap-20 gap-10">
                        <span className="text-2xl md:text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Grant Agent Portal + Playground</span>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-28 md:w-[7.5rem] border border-gray-300">
                            <span className="text-sm md:text-lg">Explore</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={windowSize?.width <= 768?160:300} src="/assets/icon/grant.svg" alt="grant" />
                </div>
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-3 md:p-8 md:gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col md:gap-20 gap-10">
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Proactive </span>
                            <span className="text-2xl md:text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Grants Program</span>
                        </div>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-[8.8rem] md:w-[10.4rem] border border-gray-300">
                            <span className="text-sm md:text-lg">Get Funded</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={windowSize?.width <= 768?160:240} src="/assets/icon/frame.png" alt="frame" />
                </div>
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-3 md:p-8 md:gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col md:gap-20 gap-10">
                        <span className="text-2xl md:text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Funding AGI</span>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-24 md:w-24 border border-gray-300">
                            <span className="text-sm md:text-lg">Build</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={windowSize?.width <= 768?160:300} src="/assets/icon/brain.svg" alt="brain" />
                </div>
            </div>
            <div className="mt-7 md:mt-14">
                <div className="border border-gray-300 rounded-lg p-3 md:px-6 flex flex-col items-start md:flex-row justify-between gap-3 md:gap-10 md:items-center shadow-sm">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-20 md:items-center">
                        <span className="font-semibold text-xl md:text-4xl">Active RFPs</span>    
                        <p className="md:max-w-xl text-sm md:text-lg">Discover funding opportunities currently available for innovative projects.</p>
                    </div>
                    <button className="py-1 px-3 md:p-4 rounded-full border border-gray-400">
                        <span className="font-semibold text-sm md:text-lg">View All</span>
                    </button>
                </div>
            </div>
            <div className="mt-7 md:mt-14 flex flex-row flex-wrap gap-5 items-center">
                <ActiveCard/>
                <ActiveCard/>
                <ActiveCard/>
            </div>
            <div className="mt-7 md:mt-14">
                <div className="border border-gray-300 rounded-lg p-3 md:px-6 flex flex-col md:flex-row justify-between md:gap-10 gap-3 items-start md:items-center shadow-sm">
                    <div className="flex flex-col md:flex-row md:gap-20 gap-1 md:items-center">
                        <span className="font-semibold text-xl md:text-4xl">Apply for Grant</span>    
                        <p className="md:max-w-xl text-sm md:text-lg">Building at the intersection of funding, Web3, and AI? Apply for a grant through our on-chain portal to build open source today!</p>
                    </div>
                    <button className="py-1 px-3 md:p-4 rounded-full border border-gray-400">
                        <span className="font-semibold text-sm md:text-lg">Apply Now</span>
                    </button>
                </div>
            </div>
            <div className="mt-7 md:mt-14">
                <BrowserIdeas/>
            </div>
            <div className="mt-7 md:mt-14">
                <div className="border border-gray-300 rounded-lg p-3 md:px-6 flex flex-col md:flex-row justify-between md:gap-10 gap-3 md:items-center shadow-sm">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-20 md:items-center">
                        <span className="font-semibold text-xl md:text-4xl">Funding Agents</span>    
                        <p className="md:max-w-xl text-sm md:text-lg">Explore funding agents designed to streamline grant workflows.</p>
                    </div>
                    <button className="py-1 px-3 md:p-4 rounded-full border border-gray-400 w-20 md:w-28 text-center">
                        <span className="font-semibold text-sm md:text-lg">Explore</span>
                    </button>
                </div>
            </div>
            <div className="mt-7 md:mt-14 flex flex-row flex-wrap gap-5">
                {
                    projectList.map((project,idx)=>(
                        <ProjectCard key={idx} projectData={project} />
                    ))
                }
            </div>
            <div className="mt-7 md:mt-14">
                <div className="border border-gray-300 rounded-lg p-4 md:px-6 flex flex-row justify-between md:gap-10 items-center shadow-sm">
                    <div className="flex flex-row md:gap-20 md:items-center">
                        <span className="font-semibold text-xl md:text-4xl">Frequently Asked Questions</span>    
                    </div>
                </div>
            </div>
            <div className="mt-7 md:mt-14 flex flex-row flex-wrap">
                <Questions/>
            </div>
            
        </div>
    )
}

export default Container;