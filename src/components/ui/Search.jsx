
import { CiSearch } from "react-icons/ci";
import { GrMicrophone } from "react-icons/gr";

export default function Search({ isMainBtn, width }) {
    return (
        <>
            <div className="flex z-10 relative">
                <input type="text" placeholder="Search" id="fname" className=" bg-[#FFFFFF] text-[#22222280] text-center rounded-l-4xl w-134" />
                <div  className="text-[#22222280] absolute right-15  top-3">
                    <GrMicrophone />

                </div>

                <button className={`w-${width} px-4 py-3 capitalize rounded-r-4xl border border-mainColor
                ${isMainBtn ? 'bg-mainColor text-white hover:bg-white hover:text-mainColor' : 'bg-white text-mainColor hover:bg-mainColor hover:text-white'}
            `}>
                    <CiSearch />
                </button>
            </div>

        </>
    )
}
