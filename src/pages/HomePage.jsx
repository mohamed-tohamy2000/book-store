import axios from "axios";
import { domain } from "../store/domain";
import Herosection from "../components/HeroSection/Herosection";
import Assemble from "../components/sectionhome/Assemble";
import BestSellerSection from "../components/Best-Seller/BestSellerSection";
import MainBookCard from "../components/bookCard/MainBookCard";
import FlashSale from "../components/FlashSale/FlashSale";

export default function HomePage() {
  const handleSubmit = async () => {
    const url = domain + "/home";

    try {
      const res = await axios.get(url, {
        params: {
          populate: {
            recommended: true,
          },
        },
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  handleSubmit();

  return (
    <>
      <div>
        <Herosection h="h-[804px]" showSearch={true} />
      </div>
      <div className="bg-[#F5F5F5]  flex justify-center items-center">
        <Assemble />
      </div>
      <div className="w-full bg-[#3B2F4A]">
        <BestSellerSection />
      </div>
      <div className="flex container m-auto p-20 gap-6">
        <MainBookCard />
        <MainBookCard />
      </div>
      <div className="w-full m-auto">
        <FlashSale />
      </div>
    </>
  );
}
