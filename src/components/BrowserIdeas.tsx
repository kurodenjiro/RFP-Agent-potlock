"use client"
import { useState } from "react"

const BrowserIdeas = () =>{
    const [currentSelect, setCurrentSelect] = useState<number|null>(null)

    const ideas = [
        {
            title: "Browser Ideas",
            sub_title: "Look at existing ideas that we are funding",
            description: "Browe the RFPs, and ideas list"
        },
        {
            title: "Draft Proposal",
            sub_title: "Draft your proposal with this template. Make sure to join the community telegram to get feedback",
            description: "Browe the RFPs, and ideas list"
        },
        {
            title: "Get Feedback",
            sub_title: "Get feedback from Potlock core team  in the telegram. ",
            description: "Browe the RFPs, and ideas list"
        },
        {
            title: "Create On-Chain Profile  & Submit Proposal",
            sub_title: "Create an on chain profile on NEAR and submit your proposal through the AI-PGF Forum. Wait for feedback if revisions are needed.",
            description: "Browe the RFPs, and ideas list"
        },
        {
            title: "KYC & Payouts",
            sub_title: "KYC and get paid half you payment upfront and the other half upon completion. Report your milestone on same submission",
            description: "Browe the RFPs, and ideas list"
        }
    ]

    return(
        <div className="flex flex-col">
            {
                ideas.map((idea: Idea,idx: number)=>(
                    <div key={idx} onClick={()=>setCurrentSelect(idx)} onDoubleClick={()=>setCurrentSelect(null)} className={`${currentSelect == idx ? "bg-[#0969DA] text-white": "border border-gray-200"} flex group flex-row justify-between items-start w-full p-5 px-7 cursor-pointer`}>
                        <div className="flex flex-row gap-14">
                            <span className={`text-6xl font-bold`}>0{idx+1}</span>
                            <div className="flex flex-col justify-between gap-5">
                                <span className={`${currentSelect==idx?"font-semibold":"font-medium"} text-2xl`}>{idea.title}</span>
                                <small>{idea.sub_title}</small>
                                {
                                    currentSelect == idx &&(
                                        <span>{idea.description}</span>
                                    )
                                }
                            </div>
                        </div>
                        {
                            currentSelect == idx ?(
                                <img width={40} src="/assets/icon/minus.svg" alt="icon" /> 
                            ):(
                                <img width={40} className="rotate-90 duration-300" src="/assets/icon/add.svg" alt="icon" />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default BrowserIdeas;