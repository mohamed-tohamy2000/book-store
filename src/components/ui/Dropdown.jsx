import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Dropdown({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 font-medium"
      >
        <span className={`${open ? "text-[#D9176C80]" : "text-gray-400"}`}>{title}</span>
        <span
          className={`transition-transform text-2xl ${open ? "rotate-90 text-[#D9176C80]" : "text-gray-400"}`}
        >
          <MdOutlineKeyboardArrowRight />
        </span>
      </button>

      {open && <div className="px-4 pb-4 text-center">{children}</div>}
    </div>
  );
}
