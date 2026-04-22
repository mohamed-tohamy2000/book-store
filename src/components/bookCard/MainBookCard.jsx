import RightComponentBookCard from "./RightComponentBookCard";
import tempBookImage from "../../assets/images/sectionlogo/silider.png";

export default function MainBookCard({ item = {}, onAddToCart, onAddToWishlist }) {
  const image =
    item.image ||
    item.cover ||
    item.thumbnail ||
    tempBookImage;

  return (
    <div className="flex gap-10 p-10 bg-white justify-between w-fit text-[#222222] ">
      <div className="">
        <img src={image} alt="book" />
      </div>
      <RightComponentBookCard item={item} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />
    </div>
  );
}
