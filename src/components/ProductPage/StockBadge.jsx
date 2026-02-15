
import { FaCheckCircle, FaTruck } from "react-icons/fa";
export function StockBadge({ stock = "",freeShipping = "",
  discountCode="", }) {
  return (
    <div className="flex items-center gap-3 flex-col">

      <div className="flex gap-3">
        {/* Stock */}
      {stock && (
        <span className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white  text-green-600 text-sm">
          <FaCheckCircle size={14} />
          {stock}
        </span>
      )}

      {/* Free Shipping */}
      {freeShipping && (
        <span className="flex bg-white items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-400 text-sm">
          <FaTruck size={14} />
          {freeShipping}
        </span>
      )}
      </div>

     <div className="flex justify-end w-full">
         {/* Discount */}
      {discountCode && (
        <span className="px-4  bg-white  py-2 rounded-lg border border-gray-300 text-orange-500 text-sm">
          Discount code: {discountCode}
        </span>
      )}
     </div>
    </div>
  );
}
