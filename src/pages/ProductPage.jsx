import Herosection from "../components/HeroSection/Herosection";
import { ProductGallery } from "../components/ProductPage/ProductGallery";
import { ProductInfo } from "../components/ProductPage/ProductInfo";
import { ProductTabs } from "../components/tabDetails/ProductTabs";
import { productMock } from "../store/product.mock";

export default function ProductPage() {
  return (
   <> 
     <div>
            <Herosection h={"h-[120px]"} />
          </div>
   
    <div className="flex flex-col justify-center items-center ">
        
     <div className="container p-16">
         <div className="flex gap-8 h-150 ">
        <ProductGallery {...productMock.gallery} />
        <ProductInfo {...productMock.info} />
      </div>

      <ProductTabs details={productMock.details} />
     </div>
    </div></>
  );
}
