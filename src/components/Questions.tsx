"use client"
import { useState } from "react";

const Questions = () =>{
    const [currentSelect, setCurrentSelect] = useState<number|null>(null)

    const questions = [
        {
            title: "What if I'm building closed source?",
            description: "We are only funding open source builders."
        },
        {
            title: "What if I'm building closed source?",
            description: "We are only funding open source builders."
        },
        {
            title: "What if I'm building closed source?",
            description: "We are only funding open source builders."
        },
        {
            title: "What if I'm building closed source?",
            description: "We are only funding open source builders."
        },
        {
            title: "What if I'm building closed source?",
            description: "We are only funding open source builders."
        }
    ]

    return(
        <div className="w-full grid md:grid-cols-2 grid-cols-1">
            {
                questions.map((question,idx)=>(
                    <div key={idx} onClick={()=>setCurrentSelect(idx)} onDoubleClick={()=>setCurrentSelect(null)} className={`${currentSelect==idx?"bg-[#0969DA] text-white":"border boder-gray-300 h-16"} p-5 flex flex-row justify-between items-start  gap-2 cursor-pointer`}>
                        <div className="flex flex-col gap-5">
                            <span className="font-semibold text-2xl">{question.title}</span>
                            {
                                currentSelect==idx&&(
                                    <small>{question.description}</small>
                                )
                            }
                        </div>
                        {
                            currentSelect==idx?(
                                <img width={20} src="/assets/icon/minus.svg" alt="icon" />
                            ):(
                                <img width={20} src="/assets/icon/add.svg" alt="icon" />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Questions;