import Button from "../ui/Button";
import BestSellerContant from "./BestSellerContant";
import BestSellerSwiper from "./BestSellerSwiper";
import { useNavigate } from "react-router-dom";

export default function BestSellerSection() {
  const navigate = useNavigate();

  return (
    <div className="p-9 flex flex-col justify-center ">
      <div className="flex flex-col items-center gap-20 ">
        <BestSellerContant />

        <div className="w-full ">
          <BestSellerSwiper />
        </div>
        <div>
          <Button
            type="button"
            classn="w-fit font-semibold text-[18px]"
            isMainBtn={true}
            onClick={() => navigate("/book")}
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
}
