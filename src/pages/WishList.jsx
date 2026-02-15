import CartTable from "../components/CartPage/CartTable";
import Herosection from "../components/HeroSection/Herosection";
import Button from "../components/ui/Button";

import { FaLongArrowAltRight } from "react-icons/fa";
export default function WishList() {
  return (
    <>
          <div>
            <Herosection h={"h-[120px]"} />
          </div>
         <div className="flex justify-center items-center">
          <div className="container flex flex-col justify-center items-center">
             <CartTable />
            <div className="flex justify-center items-center gap-3 mb-20">
             <button   className="font-bold h-12 btn bg-pink-200/50 border border-pink-400  text-pink-400 rounded-lg ">Move to cart </button>   
             <Button children={
                <div className="flex justify-evenly items-center gap-10  ">
                    <div className="flex flex-col">
                        <span className="text-center">3 item</span>
                        <span className="text-center">$80</span>
                    </div>
                    <span>
                    Check out
                </span>
                <button className="btn border border-white bg-white text-pink-600">
                    <FaLongArrowAltRight/>
                </button>
                </div>

             } isMainBtn classn={"w-100   rounded-lg "} />
             
            </div>
          
          </div>
         </div>
        </>
  )
}
