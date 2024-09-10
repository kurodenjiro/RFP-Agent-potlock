import { Space_Grotesk } from 'next/font/google'

const SpaceGrotesk = Space_Grotesk({subsets: ['latin'],weight:"400"})

const Hero = () => {
    return(
        <div className={`${SpaceGrotesk.className} flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center w-full`}>
            <div className={`flex flex-col md:max-w-2xl items-center md:items-start md:text-start`}>
                <span className='font-semibold text-4xl md:text-6xl tracking-wide'>AI /powered/ Pubic</span>
                <span className='font-semibold text-4xl md:text-6xl md:mt-7 mt-3 tracking-wide text-center md:text-start'>Goods Funding</span>
                <span className='mt-10 text-xl tracking-wide text-center md:text-start'>AI-PGF: A Proactive Grants Program and Movement to Build towards a <strong>Funding AGI</strong></span>
                <div className='flex flex-row gap-6 mt-10'>
                    <button className='p-4 rounded-full bg-[#0057FF] text-white'>
                        <span className='font-semibold'>Get Funded</span>
                    </button>
                    <button className='p-4 rounded-full border border-gray-400'>
                        <span className='font-semibold'>Learn More</span>
                    </button>
                </div>
            </div>
            <div className='border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col'>
                <span className='font-semibold text-xl'>Eligibility Assesment Agent</span>
                <span className='mt-5 max-w-lg'>The AI will do an assessment of the project's eligibility against the criteria you provide.</span>
                <textarea className='p-3 mt-5 border border-gray-200 rounded-lg shadow-sm h-44 outline-none'/>
                <div className='mt-5 flex flex-row gap-5'>
                    <button className='text-white p-2 px-3 rounded-full bg-[#0057FF]'>
                        <span className='text-sm'>Check Eligibility</span>
                    </button>
                    <button className='p-2 px-3 rounded-full border border-gray-400'>
                        <span className='text-sm'>Attach files</span>
                    </button>
                </div>
                <div className='mt-20 flex flex-row justify-center'>
                    <span className='flex flex-row gap-1 items-center text-gray-500'>Made by <img width={10} className='rounded-full h-4 w-4' src='/assets/avatar.png' alt='avatar'/> Boris.near</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;