import FlashSaleHeader from "../FlashSale/FlashSaleHeader";
import FlashSaleSlider from "../FlashSale/FlashSaleSlider";
import { useNavigate } from "react-router-dom";

import time from "../../assets/images/time.png";
import silider from "../../assets/images/silider.png";

export default function FlashSale() {
  const navigate = useNavigate();
  const dummyItems = [1, 2, 3, 4];

  return (
    <div className="w-full bg-[#F5F5F5]  p-10">
      <div className="container mx-auto max-w-6xl px-4">
        <FlashSaleHeader
          title="Flash Sale"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
          time={time}
        />

        <FlashSaleSlider
          items={dummyItems}
          silider={silider}
          onAddToCart={() => navigate("/book")}
        />
      </div>
    </div>
  );
}
