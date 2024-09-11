import { truncateString } from "@/utils/utils";

const FeaturedProject = () =>{
    return(
        <div className="flex flex-col gap-3 min-w-[350px] md:w-[445px] p-3 md:p-4 border border-gray-300 rounded-lg shadow-sm">
            <div className="flex gap-3">
                <div className="w-[41px] h-[41px]">
                    <img width={41} src="/assets/icon/avatar.png" alt="avatar" />
                </div>
                <span className="font-bold max-w-[16rem]">Lorem ipsum dolor sit amet consectetur. </span>
            </div>
            <small>{truncateString("Lorem ipsum dolor sit amet consectetur. Neque quam mattis in non condimentum. Mauris morbi volutpat ac vitae curabitur purus enim pellentesque.",100)}</small>
            <div className="flex gap-1 items-center">
                <small>By</small>
                <div className="flex gap-1 items-center">
                    <img width={14} className="w-4 h-4" src="/assets/icon/avatar.png" alt="avatar" />
                    <div className="flex gap-1">
                        <small className="font-semibold">Potluck.near</small>
                        <small>| 2 days ago</small>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap">
                <div className="flex px-2 border border-gray-400 rounded-full items-center gap-1 py-1">
                    <img width={14} src="/assets/icon/stars.svg" alt="icon" />
                    <small className="text-xs">Artificial Intelligence</small>
                </div>
                <div className="flex px-2 border border-gray-400 rounded-full items-center gap-1 py-1">
                    <img width={14} src="/assets/icon/stack.svg" alt="icon" />
                    <small className="text-xs">DAO</small>
                </div>
                <div className="flex px-2 border border-gray-400 rounded-full items-center gap-1 py-1">
                    <img width={14} src="/assets/icon/add.svg" alt="icon" />
                    <small className="text-xs">Plus 3 More</small>
                </div>
            </div>
            <div className="flex justify-between bg-gray-100 bg-opacity-75 items-center p-3">
                <div className="flex gap-1">
                    <small>FUNDING NEED:</small>
                    <img width={16} src="/assets/icon/dollar.svg" alt="icon" />
                    <small className="text-blue-700 font-bold">2,000</small>
                </div>
                <button className="flex cursor-pointer bg-white border border-gray-400 p-2 py-1 gap-1 rounded-2xl">
                    <img width={14} src="/assets/icon/pencil-simple-line.svg" alt="icon" />
                    <small className="text-xs">Dralf</small>
                </button>
            </div>
        </div>
    )
}

export default FeaturedProject;