import { FaRegTrashAlt } from "react-icons/fa";
import Steps from "../../components/ui/Steps";
import { HiOutlineArrowRight } from "react-icons/hi";

function formatDate(value) {
  if (!value) return "-";

  try {
    return new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return value;
  }
}

function makeSteps(status) {
  const normalized = String(status || "").toLowerCase();
  const inProgress = ["processing", "shipping", "in progress", "in_progress"];
  const completed = ["completed", "delivered", "done"];

  return [
    { id: 1, title: "Order placed", completed: true },
    { id: 2, title: "Shipping", completed: inProgress.includes(normalized) || completed.includes(normalized) },
    { id: 3, title: "Delivered", completed: completed.includes(normalized) },
  ];
}

export default function Historycomponent({ order = {}, className, onViewDetails }) {
  const status = order.status || "Pending";
  const steps = makeSteps(status);

  return (
    <div className={`bg-[#FFFFFF] p-6 rounded-xl ${className}`}>
      <div className="text-[#D9176C80] flex justify-end ">
        <FaRegTrashAlt size={30} />
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="text-[20px] font-normal text-[#22222280] flex flex-col gap-5">
          <h1>Order No.</h1>
          <h1>Status</h1>
          <h1>Date</h1>
          <h1>Address</h1>
        </div>
        <div className="text-[20px] font-semibold text-[#222222] flex flex-col gap-5 text-end ">
          <h1>#{order.id || "-"}</h1>
          <h1>{status}</h1>
          <h1>{formatDate(order.created_at || order.date)}</h1>
          <h1>{order.address || "-"}</h1>
        </div>
      </div>

      <div className="flex items-center justify-center mt-9  ml-50 w-full  ">
        <Steps steps={steps} />
      </div>

      <button
        type="button"
        onClick={() => onViewDetails?.(order)}
        className="text-[22px] text-[#D9176C] font-semibold flex items-center gap-6  mt-9 p-2"
      >
        <span>View order detail</span>
        <span>
          <HiOutlineArrowRight />
        </span>
      </button>
    </div>
  );
}
