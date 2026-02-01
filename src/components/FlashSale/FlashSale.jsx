import FlashSaleHeader from "../FlashSale/FlashSaleHeader";
import FlashSaleSlider from "../FlashSale/FlashSaleSlider";

// استيراد الصور
import time from "../../assets/images/time.png";
import silider from "../../assets/images/silider.png";

export default function FlashSale() {
  const dummyItems = [1, 2, 3, 4]; // عدد الكروت

  return (
    <div className="w-full bg-[#F5F5F5]  p-10">
      <div className="container mx-auto max-w-6xl px-4">
        {/* المكون الأول: الرأس */}
        <FlashSaleHeader
          title="Flash Sale"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
          time={time}
        />

        {/* المكون الثاني: السلايدر */}
        <FlashSaleSlider items={dummyItems} silider={silider} />
      </div>
    </div>
  );
}