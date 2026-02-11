import Herosection from "../components/HeroSection/Herosection";
import { ProductGallery } from "../components/ProductPage/ProductGallery";
import { ProductInfo } from "../components/ProductPage/ProductInfo";
import { ProductTabs } from "../components/ProductPage/ProductTabs";
import { productMock } from "../store/product.mock";

export default function ProductPage() {
  return (
   <> 
     <div>
            <Herosection h={"h-[120px]"} />
          </div>
   
    <div className="max-w-7xl mx-auto p-6">
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery {...productMock.gallery} />
        <ProductInfo {...productMock.info} />
      </div>

      <ProductTabs details={productMock.details} />
    </div></>
  );
}
