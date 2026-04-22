import { apiClient, toFormData } from "./client";

export const authApi = {
  register: (payload) => apiClient.post("/register", toFormData(payload)),
  login: (payload) => apiClient.post("/login", toFormData(payload)),
  logout: () => apiClient.post("/logout"),
  forgetPassword: (payload) =>
    apiClient.post("/forget-password", toFormData(payload)),
  resetPassword: (payload) =>
    apiClient.post("/reset-password", toFormData(payload)),
};

export const profileApi = {
  getProfile: () => apiClient.get("/profile"),
  updateProfile: (payload) =>
    apiClient.post("/profile/update", toFormData(payload)),
};

export const homeApi = {
  getHome: (params) => apiClient.get("/home", { params }),
};

export const booksApi = {
  getBooks: (params) => apiClient.get("/book", { params }),
  getBookById: (id, params) => apiClient.get(`/book/show/${id}`, { params }),
};

export const cartApi = {
  addBookToCart: (bookId, payload) =>
    apiClient.post(`/cart/store/${bookId}`, toFormData(payload)),
  getCart: () => apiClient.get("/cart"),
  updateCartItem: (itemId, payload) =>
    apiClient.post(`/cart/update/${itemId}`, toFormData(payload)),
  deleteCartItem: (itemId) => apiClient.delete(`/cart/destroy/${itemId}`),
};

export const orderApi = {
  getOrderDetails: (payload) => apiClient.post("/order/", toFormData(payload)),
  applyCoupon: (payload) =>
    apiClient.post("/order/apply-coupon", toFormData(payload)),
  checkout: (payload) => apiClient.post("/order/checkout/", toFormData(payload)),
};

export const wishlistApi = {
  getWishlist: () => apiClient.get("/wishlist"),
  addToWishlist: (bookId, payload) =>
    apiClient.post(`/wishlist/store/${bookId}`, toFormData(payload)),
  moveAllToCart: () => apiClient.post("/wishlist/move-to-cart"),
  deleteWishlistItem: (id, payload) =>
    apiClient.post(`/wishlist/destroy/${id}`, toFormData(payload)),
  updateWishlistQuantity: (id, payload) =>
    apiClient.put(`/wishlist/update/${id}`, toFormData(payload)),
};

export const contactsApi = {
  sendMessage: (payload) => apiClient.post("/contacts/store", toFormData(payload)),
};

export const adminAuthApi = {
  login: (payload) => apiClient.post("/admin-login", toFormData(payload)),
};

export const adminCategoryApi = {
  getAll: (params) => apiClient.get("/category", { params }),
  store: (payload) => apiClient.post("/category/store", toFormData(payload)),
  update: (id, payload) =>
    apiClient.post(`/category/update/${id}`, toFormData(payload)),
  delete: (id) => apiClient.delete(`/category/destroy/${id}`),
  show: (id) => apiClient.get(`/category/show/${id}`),
};

export const adminBookApi = {
  getAll: (params) => apiClient.get("/book", { params }),
  create: (payload) => apiClient.post("/book/store", toFormData(payload)),
  update: (id, payload) => apiClient.post(`/book/update/${id}`, toFormData(payload)),
  delete: (id) => apiClient.delete(`/book/destroy/${id}`),
  show: (id) => apiClient.get(`/book/show/${id}`),
  addImage: (id, payload) =>
    apiClient.post(`/book/add-image/${id}`, toFormData(payload)),
  deleteImage: (id) => apiClient.delete(`/book/delete-image/${id}`),
  deleteUploadedImage: (id) => apiClient.delete(`/book/delete/${id}`),
};

export const adminOrderApi = {
  getAll: (params) => apiClient.get("/order", { params }),
  show: (id) => apiClient.get(`/order/${id}`),
  changeStatus: (id, payload) =>
    apiClient.post(`/order/update-status/${id}`, toFormData(payload)),
};

export const adminContactApi = {
  getAll: (params) => apiClient.get("/contact", { params }),
  delete: (id) => apiClient.delete(`/contact/${id}`),
};

export const adminUsersApi = {
  getAll: (params) => apiClient.get("/users", { params }),
  delete: (id) => apiClient.delete(`/users/destroy/${id}`),
  createAdmin: (payload) =>
    apiClient.post("/users/add-admin/", toFormData(payload)),
};

export const adminCouponsApi = {
  getAll: (params) => apiClient.get("/coupon/", { params }),
  create: (payload) => apiClient.post("/coupon/store", toFormData(payload)),
  show: (id) => apiClient.get(`/coupon/${id}`),
  update: (id, payload) =>
    apiClient.post(`/coupon/update/${id}`, toFormData(payload)),
  delete: (id) => apiClient.delete(`/coupon/destroy/${id}`),
};

export const adminReviewsApi = {
  getAll: (params) => apiClient.get("/review/", { params }),
  show: (id) => apiClient.get(`/review/${id}`),
  updateStatus: (id, payload) =>
    apiClient.patch(`/review/update-status/${id}`, toFormData(payload)),
  delete: (id) => apiClient.delete(`/review/destroy/${id}`),
};

export const adminDashboardApi = {
  analytics: () => apiClient.get("/dashboard"),
};
