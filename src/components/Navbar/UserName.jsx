import { GrFavorite } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import img from "../../assets/images/sectionlogo/user-headset 1.svg";
import DropdownNav from "./DropdownNav";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store";
import { cartApi, profileApi, wishlistApi } from "../../api";
import { Link } from "react-router-dom";
import { getLocalCartItems, getLocalWishlistItems } from "../../store/shopLocal";

function extractItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.cart_items)) return payload.cart_items;
  if (Array.isArray(payload?.wishlist_items)) return payload.wishlist_items;
  if (Array.isArray(payload?.wishlist)) return payload.wishlist;
  if (Array.isArray(payload?.cart)) return payload.cart;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export default function UserName() {
  const { token } = useAuthStore();
  const [profileData, setProfileData] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await profileApi.getProfile();

        setProfileData(res.data?.data || {});
      } catch (err) {
        console.error("Error", err.message);
      }
    }

    if (token) {
      getProfile();
    }
  }, [token]);

  useEffect(() => {
    async function loadCounts() {
      const localCartCount = getLocalCartItems().length;
      const localWishlistCount = getLocalWishlistItems().length;

      let apiCartCount = 0;
      let apiWishlistCount = 0;

      if (token) {
        try {
          const cartRes = await cartApi.getCart();
          const cartPayload = cartRes.data?.data || cartRes.data;
          apiCartCount = extractItems(cartPayload).length;
        } catch (error) {
          console.log(error);
        }

        try {
          const wishlistRes = await wishlistApi.getWishlist();
          const wishlistPayload = wishlistRes.data?.data || wishlistRes.data;
          apiWishlistCount = extractItems(wishlistPayload).length;
        } catch (error) {
          console.log(error);
        }
      }

      setCartCount(apiCartCount + localCartCount);
      setWishlistCount(apiWishlistCount + localWishlistCount);
    }

    loadCounts();

    const handleUpdate = () => {
      loadCounts();
    };

    window.addEventListener("focus", handleUpdate);
    window.addEventListener("cart-updated", handleUpdate);
    window.addEventListener("wishlist-updated", handleUpdate);

    return () => {
      window.removeEventListener("focus", handleUpdate);
      window.removeEventListener("cart-updated", handleUpdate);
      window.removeEventListener("wishlist-updated", handleUpdate);
    };
  }, [token]);

  let imgD = false;
  const fullName = `${profileData.first_name || ""} ${profileData.last_name || ""}`.trim();

  return (
    <>
      <div className="flex items-center  w-full">
        <div className="flex items-center gap-3">
          <div className="flex gap-6 text-2xl pe-3">
            <Link to="/wishlist" className="relative">
              <GrFavorite />
              <span className="absolute -top-2 -right-3 text-[10px] bg-mainColor text-white w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            </Link>
            <Link to="/Cart" className="relative">
              <RiShoppingCart2Line />
              <span className="absolute -top-2 -right-3 text-[10px] bg-mainColor text-white w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#D9F99D] flex items-center justify-center text-[#0F172A] font-bold text-sm">
            {imgD ? (
              <img src={img} alt="" className="w-full rounded-full" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"
                alt=""
                className="w-full rounded-full"
              />
            )}
          </div>
          <div className="text-right flex flex-col">
            <span className="text-white text-sm font-bold leading-tight">
              {fullName || "John Smith"}
            </span>
            <span className="text-[#94A3B8] text-[10px]">
              {profileData.email || "Johnsmith@gmail.com"}
            </span>
          </div>
          <DropdownNav />
        </div>
      </div>
    </>
  );
}
