import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CartTable from "../components/CartPage/CartTable";
import Herosection from "../components/HeroSection/Herosection";
import PaymentSummary from "../components/PaymentSummary/PaymentSummary";
import { cartApi, orderApi } from "../api";
import {
  getLocalCartItems,
  removeLocalCartItem,
  updateLocalCartQuantity,
} from "../store/shopLocal";

function normalizeCartItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.cart_items)) return payload.cart_items;
  if (Array.isArray(payload?.cart)) return payload.cart;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeCartItem(item, index) {
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
    id: item.id ?? item.cart_item_id ?? item.cart_id ?? item.pivot?.id ?? `cart-${index}`,
    apiId: item.id ?? item.cart_item_id ?? item.cart_id ?? item.pivot?.id ?? null,
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

export default function CartPage() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [isFallbackData, setIsFallbackData] = useState(false);

  const mergeWithLocalItems = (apiItems) => {
    const localItems = getLocalCartItems();

    if (!localItems.length) return apiItems;

    const merged = [...apiItems];

    localItems.forEach((localItem) => {
      const exists = apiItems.some((apiItem) => {
        return (
          apiItem.fallbackBookId &&
          localItem.fallbackBookId &&
          String(apiItem.fallbackBookId) === String(localItem.fallbackBookId)
        );
      });

      if (!exists) {
        merged.push(localItem);
      }
    });

    return merged;
  };

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const res = await cartApi.getCart();
      const payload = res.data?.data || res.data;
      setCartData(payload || {});
      const normalized = normalizeCartItems(payload).map(normalizeCartItem);
      setItems(mergeWithLocalItems(normalized));
      setIsFallbackData(false);
    } catch (error) {
      console.log(error);
      setIsFallbackData(true);
      const localItems = getLocalCartItems();
      setItems(localItems);
      toast.error("Server is slow now, showing local cart data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();

    const handleExternalUpdate = () => {
      fetchCart();
    };

    window.addEventListener("focus", handleExternalUpdate);
    window.addEventListener("cart-updated", handleExternalUpdate);

    return () => {
      window.removeEventListener("focus", handleExternalUpdate);
      window.removeEventListener("cart-updated", handleExternalUpdate);
    };
  }, [fetchCart]);

  const subtotal = useMemo(() => {
    if (cartData.subtotal !== undefined) return Number(cartData.subtotal);
    if (cartData.sub_total !== undefined) return Number(cartData.sub_total);

    return items.reduce((sum, item) => {
      const qty = Number(item.quantity || item.qty || 1);
      const price = Number(item.price || item.final_price || 0);
      return sum + qty * price;
    }, 0);
  }, [cartData, items]);

  const tax = Number(cartData.tax || 0);
  const shipping = cartData.shipping || "Free Delivery";
  const total =
    cartData.total !== undefined ? Number(cartData.total) : Number(subtotal) + Number(tax);

  const changeQuantity = async (item, diff) => {
    if (item?.isLocal) {
      const nextQuantity = Number(item.quantity || 1) + diff;
      if (nextQuantity < 1) return;
      updateLocalCartQuantity(item.localId, nextQuantity);
      window.dispatchEvent(new Event("cart-updated"));
      fetchCart();
      return;
    }

    const itemId = item.apiId || item.id;
    const currentQuantity = Number(item.quantity || item.qty || 1);
    const nextQuantity = currentQuantity + diff;

    if (!itemId || nextQuantity < 1) {
      return;
    }

    try {
      await cartApi.updateCartItem(itemId, { quantity: nextQuantity });
      window.dispatchEvent(new Event("cart-updated"));
      await fetchCart();
    } catch (error) {
      if (item.fallbackBookId) {
        try {
          await cartApi.updateCartItem(item.fallbackBookId, { quantity: nextQuantity });
          window.dispatchEvent(new Event("cart-updated"));
          await fetchCart();
          return;
        } catch (fallbackError) {
          console.log(fallbackError);
        }
      }

      console.log(error);
      toast.error(error.response?.data?.message || "Failed to update item");
    }
  };

  const handleDeleteItem = async (item) => {
    if (item?.isLocal) {
      removeLocalCartItem(item.localId);
      window.dispatchEvent(new Event("cart-updated"));
      fetchCart();
      return;
    }

    const itemId = item.apiId || item.id;
    if (!itemId) return;

    try {
      await cartApi.deleteCartItem(itemId);
      toast.success("Item removed");
      window.dispatchEvent(new Event("cart-updated"));
      await fetchCart();
    } catch (error) {
      if (item.fallbackBookId) {
        try {
          await cartApi.deleteCartItem(item.fallbackBookId);
          toast.success("Item removed");
          window.dispatchEvent(new Event("cart-updated"));
          await fetchCart();
          return;
        } catch (fallbackError) {
          console.log(fallbackError);
        }
      }

      console.log(error);
      toast.error(error.response?.data?.message || "Failed to remove item");
    }
  };

  const handleApplyPromo = async (promo) => {
    try {
      await orderApi.applyCoupon({ code: promo });
      toast.success("Coupon applied");
      await fetchCart();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Invalid coupon");
    }
  };

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    try {
      await orderApi.checkout({});
      toast.success("Checkout completed");
      await fetchCart();
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Checkout failed");
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center w-full">
          {loading ? <p className="text-center text-gray-500 py-4">Loading cart...</p> : null}
          {isFallbackData ? (
            <p className="text-center text-amber-600 py-2">Showing temporary cart data</p>
          ) : null}

          <CartTable
            items={items}
            onIncrease={(item) => changeQuantity(item, 1)}
            onDecrease={(item) => changeQuantity(item, -1)}
            onDelete={handleDeleteItem}
            emptyMessage="Your cart is empty"
          />

          <PaymentSummary
            subtotal={subtotal}
            tax={tax}
            shipping={shipping}
            total={total}
            onApplyPromo={handleApplyPromo}
            onCheckout={handleCheckout}
            checkoutLoading={checkoutLoading}
            onKeepShopping={() => navigate("/book")}
          />
        </div>
      </div>
    </>
  );
}
