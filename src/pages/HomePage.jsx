import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Herosection from "../components/HeroSection/Herosection";
import Assemble from "../components/sectionhome/Assemble";
import BestSellerSection from "../components/Best-Seller/BestSellerSection";
import MainBookCard from "../components/bookCard/MainBookCard";
import FlashSale from "../components/FlashSale/FlashSale";
import { booksApi, cartApi, homeApi, wishlistApi } from "../api";
import { addLocalCartItem, addLocalWishlistItem } from "../store/shopLocal";

export default function HomePage() {
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        await homeApi.getHome({
          populate: {
            recommended: true,
          },
        });

        const booksRes = await booksApi.getBooks();
        const payload = booksRes.data?.data;
        const list = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : [];

        setFeaturedBooks(list.slice(0, 2));
      } catch (error) {
        console.log(error);
      }
    };

    handleSubmit();
  }, []);

  const handleAddToCart = async (book) => {
    if (!book?.id) return;

    addLocalCartItem(book, 1);
    window.dispatchEvent(new Event("cart-updated"));

    try {
      await cartApi.addBookToCart(book.id, { quantity: 1 });
      toast.success("Book added to cart");
    } catch {
      toast.error("Server failed, item added locally");
    }
  };

  const handleAddToWishlist = async (book) => {
    if (!book?.id) return;

    try {
      await wishlistApi.addToWishlist(book.id, { quantity: 1 });
      toast.success("Book added to wishlist");
      window.dispatchEvent(new Event("wishlist-updated"));
    } catch {
      addLocalWishlistItem(book, 1);
      toast.error("Server failed, item added locally");
      window.dispatchEvent(new Event("wishlist-updated"));
    }
  };

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
        {(featuredBooks.length ? featuredBooks : [{}, {}]).map((book, index) => (
          <MainBookCard
            key={book.id || index}
            item={book}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
      <div className="w-full m-auto">
        <FlashSale />
      </div>
    </>
  );
}
