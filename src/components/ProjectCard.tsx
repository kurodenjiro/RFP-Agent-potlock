const ProjectCard = ({projectData}:ProjectDetail) =>{
    const { icon,title,description,author,time,tags } = projectData
    return(
        <div className="border border-gray-300 rounded-lg md:w-[445px] w-full h-full p-7 flex flex-col gap-5">
            <img width={40} src={`/assets/icon/${icon}.svg`} alt="icon" />
            <span className="font-semibold text-xl">{title}</span>
            <small>{description}</small>
            <small className="font-semibold flex flex-row gap-1 items-center mt-2">
                By
                <img width={20} className="rounded-full" src="/assets/avatar.png" alt="avatar" />
                {author}
                <span className="font-thin">| {time}</span>
            </small>
            <div className="flex flex-row gap-3 mt-2">
                {
                    tags.map((tag,idx)=>(
                        <div key={idx} className="p-1 px-2 rounded-lg bg-gray-400">
                            <small>{tag}</small>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCard;