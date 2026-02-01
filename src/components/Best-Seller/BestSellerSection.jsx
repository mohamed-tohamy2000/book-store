import Button from "../ui/Button";
import BestSellerContant from "./BestSellerContant";
import BestSellerSwiper from "./BestSellerSwiper";

export default function BestSellerSection() {
  return (
    <div className="p-9 flex flex-col justify-center ">
      <div className="flex flex-col items-center gap-20 ">
        <BestSellerContant />

        <div className="w-full ">
          <BestSellerSwiper />
        </div>
        <div>
          <Button className="w-fit font-semibold text-[18px]" isMainBtn={true}>
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
}