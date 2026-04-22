import { GrFavorite } from "react-icons/gr";

export function ActionButtons({ onAddToCart, onAddToWishlist, isLoading = false }) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        disabled={isLoading}
        onClick={onAddToCart}
        className="bg-pink-600 text-white px-6 py-2 rounded-lg"
      >
        Add To Cart
      </button>
      <button
        type="button"
        disabled={isLoading}
        onClick={onAddToWishlist}
        className="border text-lg bg-white text-pink-500 px-4 py-2 rounded-lg"
      >
        <GrFavorite />
      </button>
    </div>
  );
}
