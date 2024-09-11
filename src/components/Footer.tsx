const Footer = () =>{
    return(
        <div className="bg-[#24292F] w-full md:h-20 h-48 pb-10 md:pb-0 flex justify-center items-center">
            <div className="md:max-w-screen-2xl md:px-20 px-5 flex gap-4 flex-col md:flex-row justify-between items-center w-full">
                <div className="flex flex-row items-center gap-5">
                    <img width={20} src="/assets/icon/x.svg" alt="icon" />
                    <img width={20} src="/assets/icon/youtube.svg" alt="icon" />
                    <img width={20} src="/assets/icon/telegramLogo.svg" alt="icon" />
                </div>
                <div className="flex flex-col md:flex-row md:gap-40 gap-4">
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
    )
}

export default Footer;