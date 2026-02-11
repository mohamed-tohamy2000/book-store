import BookCard from "../components/BookCard";
import Herosection from "../components/HeroSection/Herosection";
import FilterSidebar from "../components/ui/FilterSidebar";

export default function BookPage() {
  return (
    <div className=" ">
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div className="flex gap-10">
        
      <FilterSidebar/>
      
      <BookCard/>
      </div>
    </div>
  );
}
