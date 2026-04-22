import MainRecomendedCard from "./MainRecomendedCard";
import tempBookImage from "../../assets/images/sectionlogo/silider.png";

const tempRecommendedItems = [
  {
    id: "rec-1",
    title: "Rich Dad And Poor Dad",
    author: "Robert T. Kiyosaki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
    price: 40,
    image: tempBookImage,
  },
  {
    id: "rec-2",
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
    price: 35,
    image: tempBookImage,
  },
];

export default function SectionRecomendedCard({ items = tempRecommendedItems, onAddToCart, onAddToWishlist }) {
  return (
    <div className=" text-[#222222] flex flex-col gap-10 w-full text-[26px] font-bold bg-backGrond justify-center">
      <h3>Recomended For You</h3>
      <div className="flex gap- w-full justify-between">
        {(items.length ? items : tempRecommendedItems).slice(0, 2).map((item) => (
          <MainRecomendedCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
}
