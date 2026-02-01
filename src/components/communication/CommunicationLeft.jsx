import { HiOutlineMail } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { LuPencil } from "react-icons/lu";
import BtnType from "../Authentication/BtnType";

export default function CommunicationLeft() {
    return (
        <div className="w- flex flex-col gap-15">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[40px]">
                    Have a Questions? Get in Touch
                </h3>
                <p className="w-148 text-[#FFFFFF80] text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                    ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
                    leo.
                </p>
            </div>
            <div className="flex flex-col ">
                <div className="grid grid-cols-2 gap-6">
                    {/* input 1 */}
                    <div className="relative w-full flex items-center">
                        <div className="absolute left-4 text-[#FFFFFF80]">
                            <RxPerson size={20} />
                        </div>
                        <input
                            type="text"
                            className="w-full border border-[#FFFFFF33] bg-transparent rounded-lg p-4 pl-12 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                            placeholder="Name"
                        />
                    </div>
                    {/* input 2 */}
                    <div className="relative w-full flex items-center">
                        <div className="absolute left-4 text-[#FFFFFF80]">
                            <HiOutlineMail size={20} />
                        </div>
                        <input
                            type="text"
                            className="w-full border border-[#FFFFFF33] bg-transparent rounded-lg p-4 pl-12 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                            placeholder="Email Address"
                        />
                    </div>
                    {/* input 3 */}
                    <div className="relative w-full flex items-center col-span-2 ">
                        <div className="absolute left-4 text-[#FFFFFF80]">
                            <LuPencil size={20} />
                        </div>
                        <input
                            type="text"
                            className="w-full border h-23 text-left border-[#FFFFFF33] bg-transparent rounded-lg  p-4 pl-12 placeholder:text-[#FFFFFF80] text-white outline-none focus:border-white transition-colors"
                            placeholder="Your Message"
                        />
                    </div>
                    <BtnType btn="Send Message" />
                </div>
            </div>
        </div>
    );
}