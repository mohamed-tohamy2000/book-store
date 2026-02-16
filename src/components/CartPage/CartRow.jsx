import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import img from "../../../public/images/silider.png"

export function CartRow() {
  return (
    <tr className="grid grid-cols-14 items-center h-75.5 p-4 bg-white mb-5 ">

      {/* Item Column */}
      <td className="col-span-6 h-full flex gap-4">
        
        {/* Image */}
        <img
          src={img}
          alt="product"
          className="w-43.5  object-cover "
        />

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-600 text-lg">
              Rich Dad And Poor Dad
            </h3>
            <p className="text-sm text-gray-500">
              Author: Robert T. Kiyosaki
            </p>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut,
            </p>
          </div>

          <div className="mt-3 flex flex-col  gap-4 text-sm">
            <span className="px-3 w-40 py-1 border rounded-md text-gray-500">
              🚚 Free Shipping
            </span>

            <span className="text-gray-400">
              ASIN : B09TWSRMCB
            </span>
          </div>
        </div>
      </td>

      {/* Quantity Column */}
      <td className="col-span-2 flex justify-center items-center gap-3">
        <button className="w-6 h-6  rounded-full border flex items-center justify-center text-pink-500 border-pink-500">
          <FiMinus size={14} />
        </button>

        <span className="text-lg text-gray-600 font-medium">1</span>

        <button className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-500 border-pink-500">
          <FiPlus size={14} />
        </button>
      </td>

      {/* Price */}
      <td className="col-span-2 text-gray-600 text-center text-xl font-semibold">
        $40
      </td>

      {/* Total + Delete */}
      <td className="col-span-2 flex justify-center items-center ">
        <span className="text-xl text-gray-600 font-semibold">$40</span>

      </td>
       <td className="col-span-2 flex justify-center items-center">
         <button className="text-pink-500">
          <FiTrash2 />
        </button>
       </td>

    </tr>
  );
}
