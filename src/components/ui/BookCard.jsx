import img from "../../assets/images/sectionlogo/silider.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "./Button";
import { GrFavorite } from "react-icons/gr";
export default function BookCard() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-8 border p-2 rounded-2xl">

            
            <div className="lg:w-1/4 w-full h-63.75">
                <img src={img} alt="" className="h-full w-full  rounded-xl" />
            </div>

            
            <div className="lg:w-3/4 w-full flex flex-col justify-between">

                
                <div className="flex flex-col md:flex-row justify-between gap-6">

                    
                    <div className="md:w-2/3">
                        <h1 className="text-[18px] font-bold text-[#222222]">
                            Rich Dad And Poor Dad
                        </h1>
                        <p className="text-[#22222280] mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                        </p>
                    </div>

                   
                    <div className="flex items-start md:items-center">
                        <div className="border border-[#EBC305] rounded-xl bg-white px-3 py-2 h-fit">
                            <h1 className="text-[#EBC305] text-sm font-semibold">
                                25% Discount code: Ne212
                            </h1>
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-6">

                    
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl text-yellow-400">★★★★</span>
                            <span className="font-semibold text-[#22222280] text-[12px]">
                                (210 Review)
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-[16px] mt-1">
                            <span className="text-[#00000080]">Rate:</span>
                            <span className="text-[#222222] font-semibold">4.2</span>
                        </div>

                        <div className="w-55 flex flex-col mt-2">
                            <div className="text-[#22222280] text-sm flex justify-between">
                                <span>Author</span>
                                <span>Year</span>
                            </div>
                            <div className="text-[#222222] font-semibold text-sm flex justify-between">
                                <span>Robert T. Kiyosaki</span>
                                <span>1997</span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="md:w-auto w-full flex flex-col gap-4 md:items-end">
                        <h1 className="text-[#222222] font-semibold text-[28px]">$40.00</h1>

                        <div className="flex gap-4 w-full md:w-auto">
                            <Button className="flex gap-2 items-center justify-center px-5 py-3 w-full md:w-auto" isMainBtn>
                                <span>Add To Cart</span>
                                <MdOutlineShoppingCart size={20} />
                            </Button>

                            <Button className="px-4 py-3">
                                <GrFavorite size={20} />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
