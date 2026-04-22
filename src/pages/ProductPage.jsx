import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Herosection from "../components/HeroSection/Herosection";
import { ProductGallery } from "../components/ProductPage/ProductGallery";
import { ProductInfo } from "../components/ProductPage/ProductInfo";
import { ProductTabs } from "../components/tabDetails/ProductTabs";
import { booksApi, cartApi, wishlistApi } from "../api";
import tempProductImage from "../assets/images/silider.png";
import { addLocalCartItem, addLocalWishlistItem } from "../store/shopLocal";

function toCurrency(value) {
  const number = Number(value || 0);
  return `$${number.toFixed(2)}`;
}

function createFallbackProduct(productId) {
  return {
    id: productId,
    title: "Rich Dad And Poor Dad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    author: "Robert T. Kiyosaki",
    publication_year: 1997,
    pages: 336,
    language: "English",
    price: 40,
    price_before_discount: 50,
    rate: 4.2,
    reviews_count: 210,
    stock: 12,
    image: tempProductImage,
    images: [
      { image: tempProductImage },
      { image: tempProductImage },
      { image: tempProductImage },
    ],
    isTemporary: true,
  };
}

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      try {
        const res = await booksApi.getBookById(productId);
        const data = res.data?.data || null;
        setProduct(data || createFallbackProduct(productId));
      } catch (error) {
        console.log(error);
        setProduct(createFallbackProduct(productId));
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      fetchBook();
    }
  }, [productId]);

  const galleryData = useMemo(() => {
    const fallbackImages = [tempProductImage, tempProductImage, tempProductImage, tempProductImage];

    const images = Array.isArray(product?.images)
      ? product.images.map((item) => item.image || item.url).filter(Boolean)
      : [];

    const mainImage = product?.image || images[0] || tempProductImage;
    const thumbnails = images.length ? images : fallbackImages;

    return {
      mainImage,
      thumbnails,
    };
  }, [product]);

  const productInfo = useMemo(() => {
    const title = product?.title || product?.name || "Book";
    const description = product?.description || product?.summary || "No description";

    const meta = [
      { label: "Author", value: product?.author || product?.author_name || "Unknown" },
      { label: "Publication Year", value: product?.publication_year || product?.year || "-" },
      { label: "Pages", value: product?.pages || "-" },
      { label: "Language", value: product?.language || "-" },
    ];

    return {
      title,
      description,
      meta,
      rating: {
        value: product?.rate || product?.rating || product?.stars_number || 0,
        count: product?.reviews_count || 0,
      },
      price: {
        current: toCurrency(product?.price || product?.final_price || 0),
        old: product?.price_before_discount
          ? toCurrency(product.price_before_discount)
          : "",
      },
      stock: Number(product?.stock || 0) > 0 ? "In Stock" : "Out Of Stock",
      freeShipping: "Free Shipping Today",
      discountCode: product?.discount_code || "",
    };
  }, [product]);

  const details = useMemo(() => {
    if (!product) return [];

    return [
      { label: "Book Title", value: product.title || product.name || "-" },
      { label: "Author", value: product.author || product.author_name || "-" },
      { label: "Publication Date", value: product.publication_year || product.year || "-" },
      { label: "ASIN", value: product.asin || "-" },
      { label: "Language", value: product.language || "-" },
      { label: "Pages", value: product.pages || "-" },
    ];
  }, [product]);

  const handleAddToCart = async () => {
    if (!product?.id) return;

    addLocalCartItem(product, quantity);
    window.dispatchEvent(new Event("cart-updated"));

    setActionLoading(true);
    try {
      if (product?.isTemporary) {
        toast.success("Book added to cart");
        return;
      }

      await cartApi.addBookToCart(product.id, { quantity });
      toast.success("Book added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Server failed, item added locally");
    } finally {
      setActionLoading(false);
    }
  };

  const handleAddToWishlist = async () => {
    if (!product?.id) return;

    if (product?.isTemporary) {
      addLocalWishlistItem(product, quantity);
      toast.success("Book added to wishlist");
      window.dispatchEvent(new Event("wishlist-updated"));
      return;
    }

    setActionLoading(true);
    try {
      await wishlistApi.addToWishlist(product.id, { quantity });
      toast.success("Book added to wishlist");
      window.dispatchEvent(new Event("wishlist-updated"));
    } catch (error) {
      console.log(error);
      addLocalWishlistItem(product, quantity);
      toast.error("Server failed, item added locally");
      window.dispatchEvent(new Event("wishlist-updated"));
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className="container p-16">
          {loading ? (
            <p className="text-center text-gray-500">Loading product...</p>
          ) : product ? (
            <>
              <div className="flex gap-8 h-150 ">
                <ProductGallery {...galleryData} />
                <ProductInfo
                  {...productInfo}
                  quantity={quantity}
                  onIncreaseQuantity={() => setQuantity((prev) => prev + 1)}
                  onDecreaseQuantity={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                  isLoading={actionLoading}
                />
              </div>

              <ProductTabs details={details} />
            </>
          ) : (
            <p className="text-center text-gray-500">Product not found</p>
          )}
        </div>
      </div>
    </>
  );
}
