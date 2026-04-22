import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import CartTable from "../components/CartPage/CartTable";
import Herosection from "../components/HeroSection/Herosection";
import Button from "../components/ui/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { orderApi, wishlistApi } from "../api";
import {
  getLocalWishlistItems,
  removeLocalWishlistItem,
  updateLocalWishlistQuantity,
} from "../store/shopLocal";

function normalizeWishlistItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.wishlist_items)) return payload.wishlist_items;
  if (Array.isArray(payload?.wishlist)) return payload.wishlist;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeWishlistItem(item, index) {
  const book = item.book || item.product || item.book_data || item.item || {};
  const quantity = toNumber(
    item.quantity ?? item.qty ?? item.pivot?.quantity ?? item.amount ?? 1,
    1,
  );

  const unitPrice = toNumber(
    item.unit_price ??
      item.price_per_item ??
      item.book_price ??
      book.price ??
      book.final_price ??
      item.price ??
      item.final_price ??
      0,
  );

  const totalPrice = toNumber(
    item.total_price ?? item.total ?? item.row_total ?? quantity * unitPrice,
    quantity * unitPrice,
  );

  return {
    ...item,
    id:
      item.id ?? item.wishlist_item_id ?? item.wishlist_id ?? item.pivot?.id ?? `wish-${index}`,
    apiId: item.id ?? item.wishlist_item_id ?? item.wishlist_id ?? item.pivot?.id ?? null,
    fallbackBookId: item.book_id ?? book.id ?? null,
    title: item.title ?? book.title ?? book.name ?? "Rich Dad And Poor Dad",
    author: item.author ?? book.author ?? book.author_name ?? "Robert T. Kiyosaki",
    description:
      item.description ??
      book.description ??
      book.summary ??
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
    image: item.image ?? book.image ?? book.cover ?? book.thumbnail,
    asin: item.asin ?? book.asin ?? "-",
    quantity,
    price: unitPrice,
    total: totalPrice,
  };
}

export default function WishList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movingLoading, setMovingLoading] = useState(false);

  const mergeWithLocalItems = (apiItems) => {
    const localItems = getLocalWishlistItems();

    if (!localItems.length) return apiItems;

    const merged = [...apiItems];

    localItems.forEach((localItem) => {
      const exists = apiItems.some((apiItem) => {
        if (apiItem.fallbackBookId && localItem.fallbackBookId) {
          return String(apiItem.fallbackBookId) === String(localItem.fallbackBookId);
        }

        return (
          String(apiItem.title || "").toLowerCase() ===
          String(localItem.title || "").toLowerCase()
        );
      });

      if (!exists) {
        merged.push(localItem);
      }
    });

    return merged;
  };

  const fetchWishlist = useCallback(async () => {
    setLoading(true);
    try {
      const res = await wishlistApi.getWishlist();
      const payload = res.data?.data || res.data;
      const normalized = normalizeWishlistItems(payload).map(normalizeWishlistItem);
      setItems(mergeWithLocalItems(normalized));
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to load wishlist");
      const localItems = getLocalWishlistItems();
      setItems(localItems.length ? localItems : []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWishlist();

    const handleExternalUpdate = () => {
      fetchWishlist();
    };

    window.addEventListener("focus", handleExternalUpdate);
    window.addEventListener("wishlist-updated", handleExternalUpdate);

    return () => {
      window.removeEventListener("focus", handleExternalUpdate);
      window.removeEventListener("wishlist-updated", handleExternalUpdate);
    };
  }, [fetchWishlist]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => {
      const qty = Number(item.quantity || item.qty || 1);
      const price = Number(item.price || item.final_price || 0);
      return sum + qty * price;
    }, 0);
  }, [items]);

  const updateWishlistQuantity = async (item, diff) => {
    if (item?.isLocal) {
      const nextQuantity = Number(item.quantity || 1) + diff;
      if (nextQuantity < 1) return;
      updateLocalWishlistQuantity(item.localId, nextQuantity);
      window.dispatchEvent(new Event("wishlist-updated"));
      fetchWishlist();
      return;
    }

    const id = item.apiId || item.id;
    const currentQuantity = Number(item.quantity || item.qty || 1);
    const nextQuantity = currentQuantity + diff;

    if (!id || nextQuantity < 1) return;

    try {
      await wishlistApi.updateWishlistQuantity(id, { quantity: nextQuantity });
      window.dispatchEvent(new Event("wishlist-updated"));
      await fetchWishlist();
    } catch (error) {
      if (item.fallbackBookId) {
        try {
          await wishlistApi.updateWishlistQuantity(item.fallbackBookId, { quantity: nextQuantity });
          window.dispatchEvent(new Event("wishlist-updated"));
          await fetchWishlist();
          return;
        } catch (fallbackError) {
          console.log(fallbackError);
        }
      }

      console.log(error);
      toast.error(error.response?.data?.message || "Failed to update wishlist");
    }
  };

  const deleteWishlistItem = async (item) => {
    if (item?.isLocal) {
      removeLocalWishlistItem(item.localId);
      toast.success("Item removed");
      window.dispatchEvent(new Event("wishlist-updated"));
      fetchWishlist();
      return;
    }

    const id = item.apiId || item.id;
    if (!id) return;

    try {
      await wishlistApi.deleteWishlistItem(id, {});
      toast.success("Item removed");
      window.dispatchEvent(new Event("wishlist-updated"));
      await fetchWishlist();
    } catch (error) {
      if (item.fallbackBookId) {
        try {
          await wishlistApi.deleteWishlistItem(item.fallbackBookId, {});
          toast.success("Item removed");
          window.dispatchEvent(new Event("wishlist-updated"));
          await fetchWishlist();
          return;
        } catch (fallbackError) {
          console.log(fallbackError);
        }
      }

      console.log(error);
      toast.error(error.response?.data?.message || "Failed to remove item");
    }
  };

  const moveToCart = async () => {
    setMovingLoading(true);
    try {
      await wishlistApi.moveAllToCart();
      toast.success("All wishlist items moved to cart");
      window.dispatchEvent(new Event("wishlist-updated"));
      window.dispatchEvent(new Event("cart-updated"));
      await fetchWishlist();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to move wishlist");
    } finally {
      setMovingLoading(false);
    }
  };

  const checkoutWishlist = async () => {
    try {
      await orderApi.checkout({});
      toast.success("Checkout completed");
      await fetchWishlist();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Checkout failed");
    }
  };

  return (
    <>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center">
          {loading ? (
            <p className="text-center text-gray-500 py-6">Loading wishlist...</p>
          ) : (
            <CartTable
              items={items}
              onIncrease={(item) => updateWishlistQuantity(item, 1)}
              onDecrease={(item) => updateWishlistQuantity(item, -1)}
              onDelete={deleteWishlistItem}
              emptyMessage="Your wishlist is empty"
            />
          )}

          <div className="flex justify-center items-center gap-3 mb-20">
            <button
              type="button"
              disabled={movingLoading}
              onClick={moveToCart}
              className="font-bold h-12 btn bg-pink-200/50 border border-pink-400  text-pink-400 rounded-lg "
            >
              Move to cart
            </button>
            <Button
              isMainBtn
              classn={"w-100   rounded-lg "}
              onClick={checkoutWishlist}
              children={
                <div className="flex justify-evenly items-center gap-10  ">
                  <div className="flex flex-col">
                    <span className="text-center">{items.length} item</span>
                    <span className="text-center">${total.toFixed(2)}</span>
                  </div>
                  <span>Check out</span>
                  <span className="btn border border-white bg-white text-pink-600">
                    <FaLongArrowAltRight />
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
