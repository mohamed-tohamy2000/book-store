import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import BookCard from "../components/ui/BookCard";
import Dropdown from "../components/ui/Dropdown";

import FilterSidebar from "../components/ui/FilterSidebar";
import Navbtn from "../components/ui/Navbtn";
import Pagination from "../components/ui/Pagination";
import Search from "../components/ui/Search";
import { booksApi, cartApi, wishlistApi } from "../api";
import tempBookImage from "../assets/images/sectionlogo/silider.png";
import { addLocalCartItem, addLocalWishlistItem } from "../store/shopLocal";

const tempBooks = Array.from({ length: 3 }).map((_, index) => ({
  id: 1000 + index,
  isTemporary: true,
  title: "Rich Dad And Poor Dad",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  author: "Robert T. Kiyosaki",
  publication_year: 1997,
  rating: 4.2,
  reviews_count: 210,
  price: 40,
  image: tempBookImage,
}));

export default function BookPage() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await booksApi.getBooks();
      const payload = res.data?.data;
      const list = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.data)
          ? payload.data
          : [];

      if (!list.length) {
        setBooks(tempBooks);
        return;
      }

      const normalizedList = list.map((book, index) => ({
        ...book,
        id: book.id || `book-${index}`,
        isTemporary: false,
        image: book.image || book.cover || book.thumbnail || tempBookImage,
      }));

      setBooks(normalizedList);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load books");
      setBooks(tempBooks);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = useMemo(() => {
    if (!search.trim()) return books;

    return books.filter((book) => {
      const title = (book.title || book.name || "").toLowerCase();
      const author = (book.author || book.author_name || "").toLowerCase();
      const key = search.toLowerCase();
      return title.includes(key) || author.includes(key);
    });
  }, [books, search]);

  const handleAddToCart = async (book) => {
    if (!book?.id) {
      return;
    }

    addLocalCartItem(book, 1);
    window.dispatchEvent(new Event("cart-updated"));

    setLoadingId(book.id);
    try {
      if (book.isTemporary) {
        toast.success("Book added to cart");
        return;
      }

      await cartApi.addBookToCart(book.id, { quantity: 1 });
      toast.success("Book added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Server failed, item added locally");
    } finally {
      setLoadingId(null);
    }
  };

  const handleAddToWishlist = async (book) => {
    if (!book?.id) {
      return;
    }

    if (book.isTemporary) {
      addLocalWishlistItem(book, 1);
      toast.success("Book added to wishlist");
      window.dispatchEvent(new Event("wishlist-updated"));
      return;
    }

    setLoadingId(book.id);
    try {
      await wishlistApi.addToWishlist(book.id, { quantity: 1 });
      toast.success("Book added to wishlist");
      window.dispatchEvent(new Event("wishlist-updated"));
    } catch (error) {
      console.log(error);
      addLocalWishlistItem(book, 1);
      toast.error("Server failed, item added locally");
      window.dispatchEvent(new Event("wishlist-updated"));
    } finally {
      setLoadingId(null);
    }
  };

  const handleOpenDetails = (book) => {
    if (!book?.id) {
      return;
    }

    navigate(`/product/${book.id}/details`);
  };

  return (
    <div className=" ">
      <div>
        <Herosection h="h-[120px]" />
      </div>
      <div className="flex gap-6">
        <FilterSidebar />
        <div>
          <div className="flex gap-7 p-6 mt-9  justify-around">
            <div className="w-139.5">
              <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onSearch={(value) => setSearch(value)}
              />
            </div>
            <div className="w-50 ">
              <Dropdown title="Sort by" className={"bg-[#0000001A]"}></Dropdown>
            </div>
          </div>
          <div className="w-full flex items-center justify-between flex-col">
            <Navbtn />
            <div className="p-10 flex flex-col gap-2 mt-6 container">
              {loading ? (
                <p className="text-center text-gray-500">Loading books...</p>
              ) : filteredBooks.length ? (
                filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    item={book}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    onOpenDetails={handleOpenDetails}
                    isLoading={loadingId === book.id}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">No books found</p>
              )}
            </div>
            <div className="flex items-center justify-center p-7 mt-7">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
