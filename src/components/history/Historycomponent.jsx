import { FaRegTrashAlt } from "react-icons/fa";
import Steps from "../../components/ui/Steps";

import { HiOutlineArrowRight } from "react-icons/hi";

export default function Historycomponent({ or, className }) {
    const steps = [
        { id: 1, title: "Order placed", completed: true },
        { id: 2, title: "Shipping", completed: false },
        { id: 3, title: "Delivered", completed: false },
    ];
    return (
        <div className={`bg-[#FFFFFF] p-6 rounded-xl ${className}`}>
            <div className="text-[#D9176C80] flex justify-end ">
                <FaRegTrashAlt size={30} />
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="text-[20px] font-normal text-[#22222280] flex flex-col gap-5">
                    <h1>Order No.</h1>
                    <h1>Status</h1>
                    <h1>Date</h1>
                    <h1>Address</h1>

                </div>
                <div className="text-[20px] font-semibold text-[#222222] flex flex-col gap-5 text-end ">
                    <h1 className="">#123456</h1>
                    <h1>In progress</h1>
                    <h1>jul, 31 2024</h1>
                    <h1>Maadi, Cairo, Egypt.</h1>
                </div>
            </div>
            {
                or ? (

                        <div className="flex items-center justify-center mt-9  ml-50 w-full  ">
                            <Steps steps={steps} />
                        </div>

                ) :
                    (

                        <div className="text-[22px] text-[#D9176C] font-semibold flex items-center gap-6  mt-9 p-2">
                            <h1 >
                                View order detail
                            </h1>
                            <span>
                                <HiOutlineArrowRight />
                            </span>
                        </div>
                    )
            }
        </div>
    )
}
