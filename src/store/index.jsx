import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      isAuthenticated: false,
      rememberMe: false,

      login: (token, rememberMe = false) => {
        // ✅ Clear any existing token from both storages first
        localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");

        // ✅ Save token in the appropriate storage
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
        // ✅ Clear token from both storages
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
        // ✅ Check both storages on initial load
        const fromLocal = localStorage.getItem("auth-token");
        const fromSession = sessionStorage.getItem("auth-token");

        // Return localStorage if token exists there, otherwise sessionStorage
        return fromLocal ? localStorage : sessionStorage;
      }),
    },
  ),
);
