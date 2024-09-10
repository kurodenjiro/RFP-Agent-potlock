import ActiveCard from "./ActiveCard";
import BrowserIdeas from "./BrowserIdeas";
import ProjectCard from "./ProjectCard";
import Questions from "./Questions";

const Container = () =>{

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

    return(
        <div className="flex flex-col mt-28 w-full">
            <div className="flex flex-col gap-10 items-center">
                <span className="text-2xl font-bold">Building with the Best</span>
                <div className="flex flex-row gap-28 items-center">
                    <img width={220} src={`/assets/logo/potlock.svg`} alt="potlock" />
                    <img width={140} src={`/assets/logo/near.svg`} alt="near" />
                    <img width={220} src={`/assets/logo/masa.svg`} alt="potlock" />
                    <img width={220} src={`/assets/logo/gitcoin.svg`} alt="gitcoin" />
                </div>
            </div>
            <div className="mt-14">
                <div className="border border-gray-300 rounded-lg p-3 px-6 flex flex-row gap-10 items-center shadow-sm">
                    <span className="font-semibold text-4xl">What is AI-PGF</span>    
                    <p className="max-w-4xl text-lg">we're redefining grant funding by leveraging AI to streamline workflows, reduce overhead, and ensure promising projects receive timely support.</p>
                </div>
            </div>
            <div className="mt-14 flex flex-row gap-10 flex-wrap w-full items-center justify-center">
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-8 gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col gap-20">
                        <span className="text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Funding Innovation Community</span>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-24 border border-gray-300">
                            <span className="text-lg">Join</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={260} src="/assets/icon/group.svg" alt="group" />
                </div>
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-8 gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col gap-20">
                        <span className="text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Grant Agent Portal + Playground</span>
                        <button className="flex cursor-pointer mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-32 border border-gray-300">
                            <span className="text-lg">Explore</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={300} src="/assets/icon/grant.svg" alt="grant" />
                </div>
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-8 gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col">
                            <span className="text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Proactive </span>
                            <span className="text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Grants Program</span>
                        </div>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-[10.5rem] border border-gray-300">
                            <span className="text-lg">Get Funded</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={240} className="w-64 h-52" src="/assets/icon/frame.png" alt="frame" />
                </div>
                <div className="border border-gray-300 shadow-sm rounded-2xl items-center p-8 gap-5 flex flex-row justify-between md:max-w-[665px] md:h-[350px] w-full h-full"> 
                    <div className="flex flex-col gap-20">
                        <span className="text-4xl font-semibold md:max-w-[20rem] tracking-wide leading-tight">Funding AGI</span>
                        <button className="flex cursor-pointer md:mt-10 hover:border-gray-400 flex-row gap-2 items-center px-4 py-1 rounded-full w-24 border border-gray-300">
                            <span className="text-lg">Build</span>
                            <img width={20} src="/assets/icon/arrow-up-right.svg" alt="arrow" />
                        </button>
                    </div>
                    <img width={240} src="/assets/icon/brain.svg" alt="group" />
                </div>
            </div>
            <div className="mt-14">
                <div className="border border-gray-300 rounded-lg p-3 px-6 flex flex-row justify-between gap-10 items-center shadow-sm">
                    <div className="flex flex-row gap-20 items-center">
                        <span className="font-semibold text-4xl">Active RFPs</span>    
                        <p className="max-w-xl text-lg">Discover funding opportunities currently available for innovative projects.</p>
                    </div>
                    <button className="p-4 rounded-full border border-gray-400">
                        <span className="font-semibold text-lg">View All</span>
                    </button>
                </div>
            </div>
            <div className="mt-14 flex flex-row flex-wrap gap-5 items-center">
                <ActiveCard/>
                <ActiveCard/>
                <ActiveCard/>
            </div>
            <div className="mt-14">
                <div className="border border-gray-300 rounded-lg p-3 px-6 flex flex-row justify-between gap-10 items-center shadow-sm">
                    <div className="flex flex-row gap-20 items-center">
                        <span className="font-semibold text-4xl">Apply for Grant</span>    
                        <p className="max-w-xl text-lg">Building at the intersection of funding, Web3, and AI? Apply for a grant through our on-chain portal to build open source today!</p>
                    </div>
                    <button className="p-4 rounded-full border border-gray-400">
                        <span className="font-semibold text-lg">Apply Now</span>
                    </button>
                </div>
            </div>
            <div className="mt-14">
                <BrowserIdeas/>
            </div>
            <div className="mt-14">
                <div className="border border-gray-300 rounded-lg p-3 px-6 flex flex-row justify-between gap-10 items-center shadow-sm">
                    <div className="flex flex-row gap-20 items-center">
                        <span className="font-semibold text-4xl">Funding Agents</span>    
                        <p className="max-w-xl text-lg">Explore funding agents designed to streamline grant workflows.</p>
                    </div>
                    <button className="p-4 rounded-full border border-gray-400">
                        <span className="font-semibold text-lg">Explore</span>
                    </button>
                </div>
            </div>
            <div className="mt-14 flex flex-row flex-wrap gap-5">
                {
                    projectList.map((project,idx)=>(
                        <ProjectCard key={idx} projectData={project} />
                    ))
                }
            </div>
            <div className="mt-14">
                <div className="border border-gray-300 rounded-lg p-4 px-6 flex flex-row justify-between gap-10 items-center shadow-sm">
                    <div className="flex flex-row gap-20 items-center">
                        <span className="font-semibold text-4xl">Frequently Asked Questions</span>    
                    </div>
                </div>
            </div>
            <div className="mt-14 flex flex-row flex-wrap">
                <Questions/>
            </div>
        </div>
    )
}

export default Container;