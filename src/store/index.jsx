import { useParams } from "react-router-dom";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      rememberMe: false,

      login: (token, rememberMe = false) => {
        localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");

        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(
          "auth-token",
          JSON.stringify({
            state: {
              token,
              isAuthenticated: true,
              rememberMe,
            },
            version: 0,
          }),
        );

        set({
          token,
          isAuthenticated: true,
          rememberMe,
        });
      },

      logout: () => {
        localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");

        set({
          token: null,
          isAuthenticated: false,
          rememberMe: false,
        });
      },
    }),
    {
      name: "auth-token",
      storage: createJSONStorage(() => {
        const fromLocal = localStorage.getItem("auth-token");
        return fromLocal ? localStorage : sessionStorage;
      }),
    },
  ),
);

export const useNavProductPage = () => {
  const { productId } = useParams();
  const nav = [
    { link: "ProductDetails", path: `/product/${productId}/details` },
    { link: "CustomerReviews", path: `/product/${productId}/review` },
    { link: "Recomminded", path: `/product/${productId}/recommided` },
  ];

  return { nav };
};
