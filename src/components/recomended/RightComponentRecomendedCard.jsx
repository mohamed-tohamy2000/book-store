import Button from "../ui/Button";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";

export default function RightComponentRecomendedCard() {
  return (
    <div className="flex flex-col gap-6">
      {/* top */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-[18px]">The Design Of Books</h3>
          <h4 className="font-normal text-[14px] text-[#22222280] ">
            Author: <span className="text-[#222222]">Debbie Berne</span>
          </h4>
        </div>
        <p className="w-88.5 text-[14px] font-normal text-[#22222280]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctiofit
          earum neque reiciendis ipsa expedita eius modi maxime veniam
          obcaecati, aliquam explicabo sit eligendi, minima qui? Recusandae
          assumenda modi sint! Consequuntur.
        </p>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-300">★★★★</span>
              <span className="font-semibold text-[#22222280] text-[12px] ">
                {"(210 Review)"}
              </span>
            </div>
            <h4 className="text-[14px] text-[#22222280]">
              Rate: <span className="text-[#222222] font-semibold">4.2</span>
            </h4>
          </div>
          <h3 className="text-[26px] text-[#222222] font-semibold">$40.00</h3>
        </div>
        <div className="flex justify-between gap-4">
          <Button
            isMainBtn={true}
            classn="w-full text-white font-semibold text flex items-center justify-center gap-2 text-[16px] rounded-lg  px-4 py-3 "
          >
            Add To Cart
            <LuShoppingCart />
          </Button>
          <Button isMainBtn={false} classn="w-fit text-mainColor text-xl rounded-lg  px-4 py-3 ">
            <MdFavoriteBorder />
          </Button>
        </div>
      </div>
    </div>
  );
}
