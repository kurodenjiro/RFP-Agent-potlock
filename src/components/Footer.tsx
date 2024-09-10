const Footer = () =>{
    return(
        <div className="flex flex-col mt-20 justify-center items-center">
            <div className="bg-[#0969DA] w-full h-64 flex flex-col gap-4 items-center p-6 text-white">
                <img width={120} src="/assets/avatar-group.png" alt="avatar" />
                <div className="flex flex-col items-center gap-4">
                    <span className="font-semibold text-2xl">Still have questions?</span>
                    <small>Can&#39;t find the answer you&#39;re looking for&#63; Join our Telegram Chat</small>
                </div>
                <button className="flex flex-row border border-gray-300 p-3 py-2 mt-5 gap-2 items-center rounded-full">
                    <img width={20} src="/assets/icon/telegram.svg" alt="icon" />
                    <span>Join Now</span>
                </button>
            </div>
            <div className="bg-[#24292F] w-full h-20 flex justify-center items-center">
                <div className="md:max-w-screen-2xl md:px-20 px-10 flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row items-center gap-5">
                        <img width={20} src="/assets/icon/x.svg" alt="icon" />
                        <img width={20} src="/assets/icon/youtube.svg" alt="icon" />
                        <img width={20} src="/assets/icon/telegramLogo.svg" alt="icon" />
                    </div>
                    <div className="flex flex-row md:gap-40 gap-10">
                        <div className="flex flex-row gap-2 text-white items-center">
                            <span>Part of the</span>
                            <img width={90} src="/assets/logo/potlock-light.svg" alt="logo" />
                            <span>open funding stack</span>
                        </div>
                        <div className="flex flex-row gap-5">
                            <input type="text" placeholder="Enter your email" className="p-2 px-4 text-sm rounded-full outline-none md:w-[250px] w-full"/>
                            <button className="p-2 px-3 rounded-full border border-gray-300 text-white">
                                <small>Subscribe</small>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;