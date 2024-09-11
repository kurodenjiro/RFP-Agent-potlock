const SectionCreateProposal = () =>{
    return(
        <div className="h-full w-full relative">
            <img width={20} className="w-full h-16 md:h-full" src="/assets/background/section.png" alt="background" />
            <div className="flex justify-center items-start absolute top-[35%] md:top-[60%] left-[1%] md:left-[11%] transform -translate-y-1/2">
                <div className="md:max-w-screen-2xl md:px-20 px-5 w-full md:mt-10 mt-4 md:pb-20">
                    <div className="flex flex-col gap-1 md:gap-3">
                        <span className="font-semibold text-xl md:text-3xl">Create Proposal</span>
                        <span className="font-semibold text-sm md:text-lg">Proposal &#62; <span className="font-thin">Create Proposal</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCreateProposal;