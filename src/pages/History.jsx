import { useEffect, useMemo, useState } from "react";
import Herosection from "../components/HeroSection/Herosection";
import BtnBook from "../components/ui/BtnBook";
import Historycomponent from "../components/history/Historycomponent";
import { adminOrderApi, orderApi } from "../api";
import toast from "react-hot-toast";

const tabs = ["all", "in progress", "completed", "canceled"];
const tempOrders = [
  {
    id: 123456,
    status: "in progress",
    created_at: "2024-07-31T10:00:00.000Z",
    address: "Maadi, Cairo, Egypt.",
    total: 120,
    isTemporary: true,
  },
  {
    id: 123457,
    status: "completed",
    created_at: "2024-07-25T10:00:00.000Z",
    address: "Nasr City, Cairo, Egypt.",
    total: 90,
    isTemporary: true,
  },
  {
    id: 123458,
    status: "canceled",
    created_at: "2024-07-20T10:00:00.000Z",
    address: "Dokki, Giza, Egypt.",
    total: 75,
    isTemporary: true,
  },
];

function normalizeStatus(status) {
  const value = String(status || "").toLowerCase();
  if (["cancelled", "canceled"].includes(value)) return "canceled";
  if (["completed", "delivered", "done"].includes(value)) return "completed";
  if (["processing", "shipping", "in_progress", "in progress", "pending"].includes(value)) {
    return "in progress";
  }
  return "in progress";
}

function extractOrders(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.orders)) return payload.orders;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
}

export default function History() {
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState(tempOrders);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await adminOrderApi.getAll();
      const payload = res.data?.data || res.data;
      const list = extractOrders(payload);
      setOrders(list.length ? list : tempOrders);
    } catch (error) {
      try {
        const fallback = await orderApi.getOrderDetails({});
        const payload = fallback.data?.data || fallback.data;
        const list = extractOrders(payload);
        setOrders(list.length ? list : tempOrders);
      } catch (fallbackError) {
        console.log(error);
        console.log(fallbackError);
        setOrders(tempOrders);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    if (activeTab === "all") return orders;
    return orders.filter((order) => normalizeStatus(order.status) === activeTab);
  }, [activeTab, orders]);

  const handleViewDetails = async (order) => {
    if (!order?.id) return;
    if (order?.isTemporary) {
      toast.success(`Order #${order.id} total: ${order.total}`);
      return;
    }

    try {
      const res = await adminOrderApi.show(order.id);
      const details = res.data?.data || {};
      toast.success(`Order #${order.id} total: ${details.total || order.total || "-"}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load order details");
    }
  };

  return (
    <>
      <Herosection h={"h-[120px]"} />
      <div className="flex items-center justify-center">
        <div className=" container flex justify-center flex-col ">
          <nav className="flex gap-6 mt-8">
            {tabs.map((tab) => (
              <BtnBook
                key={tab}
                type="button"
                className="w-fit"
                isMainBtn={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </BtnBook>
            ))}
          </nav>

          <div className="p-9 mt-7 flex flex-col gap-4">
            {loading ? (
              <p className="text-center text-gray-500">Loading orders...</p>
            ) : filteredOrders.length ? (
              filteredOrders.map((order) => (
                <Historycomponent
                  key={order.id}
                  order={order}
                  onViewDetails={handleViewDetails}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No orders found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
