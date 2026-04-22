import { useState } from "react";
import toast from "react-hot-toast";
import Herosection from "../components/HeroSection/Herosection";
import {
  adminAuthApi,
  adminBookApi,
  adminCategoryApi,
  adminContactApi,
  adminCouponsApi,
  adminDashboardApi,
  adminOrderApi,
  adminReviewsApi,
  adminUsersApi,
} from "../api";
import { useAuthStore } from "../store";

function extractList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.orders)) return payload.orders;
  if (Array.isArray(payload?.users)) return payload.users;
  return [];
}

export default function AdminPage() {
  const { login } = useAuthStore();

  const [adminForm, setAdminForm] = useState({ email: "", password: "" });
  const [dashboard, setDashboard] = useState({});

  const [categories, setCategories] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  const [books, setBooks] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [newAdmin, setNewAdmin] = useState({ name: "", adminEmail: "", password: "" });
  const [newCoupon, setNewCoupon] = useState({ code: "", discount: "", expires_at: "" });

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await adminAuthApi.login(adminForm);
      const token = res.data?.data?.token;
      if (token) {
        login(token, true);
      }
      toast.success(res.data?.message || "Admin logged in");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Admin login failed");
    }
  };

  const loadDashboard = async () => {
    try {
      const res = await adminDashboardApi.analytics();
      setDashboard(res.data?.data || res.data || {});
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load dashboard");
    }
  };

  const loadCategories = async () => {
    try {
      const res = await adminCategoryApi.getAll();
      setCategories(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load categories");
    }
  };

  const createCategory = async (e) => {
    e.preventDefault();
    if (!categoryTitle.trim()) return;
    try {
      await adminCategoryApi.store({ title: categoryTitle });
      setCategoryTitle("");
      toast.success("Category created");
      await loadCategories();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create category");
    }
  };

  const deleteCategory = async (id) => {
    try {
      await adminCategoryApi.delete(id);
      toast.success("Category deleted");
      await loadCategories();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete category");
    }
  };

  const loadBooks = async () => {
    try {
      const res = await adminBookApi.getAll();
      setBooks(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load books");
    }
  };

  const deleteBook = async (id) => {
    try {
      await adminBookApi.delete(id);
      toast.success("Book deleted");
      await loadBooks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete book");
    }
  };

  const loadOrders = async () => {
    try {
      const res = await adminOrderApi.getAll();
      setOrders(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load orders");
    }
  };

  const changeOrderStatus = async (id, status) => {
    try {
      await adminOrderApi.changeStatus(id, { status });
      toast.success("Order status updated");
      await loadOrders();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update order status");
    }
  };

  const loadContacts = async () => {
    try {
      const res = await adminContactApi.getAll();
      setContacts(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load contacts");
    }
  };

  const deleteContact = async (id) => {
    try {
      await adminContactApi.delete(id);
      toast.success("Contact deleted");
      await loadContacts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete contact");
    }
  };

  const loadUsers = async () => {
    try {
      const res = await adminUsersApi.getAll();
      setUsers(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load users");
    }
  };

  const deleteUser = async (id) => {
    try {
      await adminUsersApi.delete(id);
      toast.success("User deleted");
      await loadUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  const createAdmin = async (e) => {
    e.preventDefault();
    try {
      await adminUsersApi.createAdmin(newAdmin);
      setNewAdmin({ name: "", adminEmail: "", password: "" });
      toast.success("Admin created");
      await loadUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create admin");
    }
  };

  const loadCoupons = async () => {
    try {
      const res = await adminCouponsApi.getAll();
      setCoupons(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load coupons");
    }
  };

  const createCoupon = async (e) => {
    e.preventDefault();
    try {
      await adminCouponsApi.create(newCoupon);
      setNewCoupon({ code: "", discount: "", expires_at: "" });
      toast.success("Coupon created");
      await loadCoupons();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create coupon");
    }
  };

  const deleteCoupon = async (id) => {
    try {
      await adminCouponsApi.delete(id);
      toast.success("Coupon deleted");
      await loadCoupons();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete coupon");
    }
  };

  const loadReviews = async () => {
    try {
      const res = await adminReviewsApi.getAll();
      setReviews(extractList(res.data?.data || res.data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load reviews");
    }
  };

  const updateReviewStatus = async (id, status) => {
    try {
      await adminReviewsApi.updateStatus(id, { status });
      toast.success("Review status updated");
      await loadReviews();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update review");
    }
  };

  const deleteReview = async (id) => {
    try {
      await adminReviewsApi.delete(id);
      toast.success("Review deleted");
      await loadReviews();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete review");
    }
  };

  return (
    <>
      <Herosection h="h-[120px]" />
      <div className="container m-auto py-8 flex flex-col gap-8">
        <section className="bg-white p-4 rounded border">
          <h2 className="text-xl font-bold mb-3">Admin Login</h2>
          <form onSubmit={handleAdminLogin} className="grid grid-cols-3 gap-3">
            <input
              className="border p-2 rounded"
              placeholder="Admin Email"
              value={adminForm.email}
              onChange={(e) => setAdminForm((prev) => ({ ...prev, email: e.target.value }))}
            />
            <input
              className="border p-2 rounded"
              type="password"
              placeholder="Password"
              value={adminForm.password}
              onChange={(e) => setAdminForm((prev) => ({ ...prev, password: e.target.value }))}
            />
            <button type="submit" className="bg-mainColor text-white rounded p-2">
              Login As Admin
            </button>
          </form>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Dashboard Analytics</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadDashboard}>
              Load
            </button>
          </div>
          <pre className="bg-gray-100 p-3 rounded overflow-auto text-xs">{JSON.stringify(dashboard, null, 2)}</pre>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Categories</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadCategories}>
              Load
            </button>
          </div>
          <form onSubmit={createCategory} className="flex gap-2 mb-3">
            <input
              className="border p-2 rounded flex-1"
              placeholder="Category title"
              value={categoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
            />
            <button type="submit" className="bg-mainColor text-white rounded px-4">
              Create
            </button>
          </form>
          <div className="space-y-2">
            {categories.map((cat) => (
              <div key={cat.id} className="flex justify-between border rounded p-2">
                <span>{cat.title || cat.name || `Category ${cat.id}`}</span>
                <button type="button" className="text-red-600" onClick={() => deleteCategory(cat.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Books</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadBooks}>
              Load
            </button>
          </div>
          <div className="space-y-2">
            {books.map((book) => (
              <div key={book.id} className="flex justify-between border rounded p-2">
                <span>{book.title || `Book ${book.id}`}</span>
                <button type="button" className="text-red-600" onClick={() => deleteBook(book.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Orders</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadOrders}>
              Load
            </button>
          </div>
          <div className="space-y-2">
            {orders.map((order) => (
              <div key={order.id} className="flex justify-between border rounded p-2 gap-3">
                <span>
                  #{order.id} - {order.status || "pending"}
                </span>
                <div className="flex gap-2">
                  <button type="button" className="border rounded px-2" onClick={() => changeOrderStatus(order.id, "pending")}>
                    Pending
                  </button>
                  <button type="button" className="border rounded px-2" onClick={() => changeOrderStatus(order.id, "completed")}>
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Contacts</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadContacts}>
              Load
            </button>
          </div>
          <div className="space-y-2">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex justify-between border rounded p-2">
                <span>{contact.email || contact.name || `Contact ${contact.id}`}</span>
                <button type="button" className="text-red-600" onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Users</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadUsers}>
              Load
            </button>
          </div>
          <form onSubmit={createAdmin} className="grid grid-cols-3 gap-2 mb-3">
            <input
              className="border rounded p-2"
              placeholder="Name"
              value={newAdmin.name}
              onChange={(e) => setNewAdmin((prev) => ({ ...prev, name: e.target.value }))}
            />
            <input
              className="border rounded p-2"
              placeholder="Admin Email"
              value={newAdmin.adminEmail}
              onChange={(e) => setNewAdmin((prev) => ({ ...prev, adminEmail: e.target.value }))}
            />
            <input
              className="border rounded p-2"
              placeholder="Password"
              value={newAdmin.password}
              onChange={(e) => setNewAdmin((prev) => ({ ...prev, password: e.target.value }))}
            />
            <button type="submit" className="bg-mainColor text-white rounded p-2 col-span-3">
              Create Admin
            </button>
          </form>
          <div className="space-y-2">
            {users.map((user) => (
              <div key={user.id} className="flex justify-between border rounded p-2">
                <span>{user.email || user.name || `User ${user.id}`}</span>
                <button type="button" className="text-red-600" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Coupons</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadCoupons}>
              Load
            </button>
          </div>
          <form onSubmit={createCoupon} className="grid grid-cols-3 gap-2 mb-3">
            <input
              className="border rounded p-2"
              placeholder="Code"
              value={newCoupon.code}
              onChange={(e) => setNewCoupon((prev) => ({ ...prev, code: e.target.value }))}
            />
            <input
              className="border rounded p-2"
              placeholder="Discount"
              value={newCoupon.discount}
              onChange={(e) => setNewCoupon((prev) => ({ ...prev, discount: e.target.value }))}
            />
            <input
              className="border rounded p-2"
              placeholder="Expire Date"
              value={newCoupon.expires_at}
              onChange={(e) => setNewCoupon((prev) => ({ ...prev, expires_at: e.target.value }))}
            />
            <button type="submit" className="bg-mainColor text-white rounded p-2 col-span-3">
              Create Coupon
            </button>
          </form>
          <div className="space-y-2">
            {coupons.map((coupon) => (
              <div key={coupon.id} className="flex justify-between border rounded p-2">
                <span>{coupon.code || `Coupon ${coupon.id}`}</span>
                <button type="button" className="text-red-600" onClick={() => deleteCoupon(coupon.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-4 rounded border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold">Reviews</h2>
            <button type="button" className="border rounded px-3 py-1" onClick={loadReviews}>
              Load
            </button>
          </div>
          <div className="space-y-2">
            {reviews.map((review) => (
              <div key={review.id} className="flex justify-between border rounded p-2 gap-3">
                <span>{review.review || `Review ${review.id}`}</span>
                <div className="flex gap-2">
                  <button type="button" className="border rounded px-2" onClick={() => updateReviewStatus(review.id, "accepted")}>
                    Accept
                  </button>
                  <button type="button" className="border rounded px-2" onClick={() => updateReviewStatus(review.id, "rejected")}>
                    Reject
                  </button>
                  <button type="button" className="text-red-600" onClick={() => deleteReview(review.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
