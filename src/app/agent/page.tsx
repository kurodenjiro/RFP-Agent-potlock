const Agent = () =>{
    return(
        <div className="flex flex-row px-20 pt-10 pb-5 w-full h-full">
            <div className="flex flex-col justify-between p-5 w-1/4 h-[850px] border-r">
                <div className="flex flex-col gap-10">
                    <div className="flex w-full gap-3 justify-between">
                        <img width={20} src="/assets/icon/arrow-left.svg" alt="back" />
                        <div className="flex gap-1 justify-center items-center">
                            <img width={5} className="w-8 h-8 rounded-full" src="/assets/avatar.png" alt="avatar" />
                            <span>Rubric Application Screening</span>
                        </div>
                        <div className="gap-3 flex justify-center items-center">
                            <img width={15} src="/assets/icon/search.svg" alt="search" />
                            <img width={20} src="/assets/icon/add.svg" alt="add" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-gray-300">HISTORY</div>
                        <div className="flex flex-row gap-2">
                            <img width={15} src="/assets/icon/reply-gray.svg" alt="reply" />
                            <span>Link item</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-gray-300">PAGES</span>
                    <div className="flex gap-2">
                        <img width={20} src="/assets/icon/market.svg" alt="market" />
                        <span>Marketplace</span>
                    </div>
                    <div className="flex gap-2">
                        <img width={20} src="/assets/icon/help.svg" alt="help" />
                        <span>Help</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[850px] flex px-20 flex-col">
                <div className="h-full w-full flex flex-col gap-5 items-center justify-center p-20">
                    <img width={30} className="w-[50px] h-[50px] rounded-full" src="/assets/avatar.png" alt="avatar" />
                    <span>Rubric Application Screening</span>
                    <span className="text-sm w-[581px] text-center text-gray-500" >Automate the evaluation of applications with a customizable rubric for fair and accurate scoring. Easily deploy your own criteria and view real-time calculations during assessments. </span>
                    <div className="flex flex-row p-2 gap-3">
                        <span className="text-gray-500">Start by entering your evaluation criteria below!</span>
                        <img width={20} src="/assets/icon/replied.svg" alt="replied" />
                    </div>
                </div>
                <div className="w-full h-auto py-2 px-20 border border-solid flex gap-5">
                    <input type="text" className="w-full focus outline-none" placeholder="Input your evaluation criteria" />
                    <div className="flex gap-1">
                        <img src="assets/icon/gif.svg" alt="gif" />
                        <img src="assets/icon/voice.svg" alt="voice" />
                        <img src="assets/icon/image.svg" alt="image" />
                        <img src="assets/icon/medium.svg" alt="medium" />

                    </div>
                    <img width={50} src="/assets/icon/send-blue.svg" alt="send" />
                </div>
            </div>   
        </div>
    )
}
export default Agent;