import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import tempBookImage from "../../assets/images/sectionlogo/silider.png";

export function CartRow({ item = {}, onIncrease, onDecrease, onDelete }) {
  const title = item.title || item.name || "Book Item";
  const author = item.author || item.author_name || "Unknown";
  const description = item.description || item.summary || "No description";
  const image = item.image || item.cover || item.thumbnail || tempBookImage;
  const quantity = Number(item.quantity || item.qty || 1);
  const price = Number(item.price || item.final_price || 0);
  const total = Number(item.total || price * quantity || 0);
  const asin = item.asin || item.code || "-";

  return (
    <tr className="grid grid-cols-14 items-center h-75.5 p-4 bg-white mb-5 w-full">
      <td className="col-span-6 h-full flex gap-4">
        <img src={image} alt="product" className="w-43.5  object-cover " />

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-600 text-lg">{title}</h3>
            <p className="text-sm text-gray-500">Author: {author}</p>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">{description}</p>
          </div>

          <div className="mt-3 flex flex-col  gap-4 text-sm">
            <span className="px-3 w-40 py-1 border rounded-md text-gray-500">
              Free Shipping
            </span>

            <span className="text-gray-400">ASIN : {asin}</span>
          </div>
        </div>
      </td>

      <td className="col-span-2 flex justify-center items-center gap-3">
        <button
          type="button"
          onClick={() => onDecrease?.(item)}
          className="w-6 h-6  rounded-full border flex items-center justify-center text-pink-500 border-pink-500"
        >
          <FiMinus size={14} />
        </button>

        <span className="text-lg text-gray-600 font-medium">{quantity}</span>

        <button
          type="button"
          onClick={() => onIncrease?.(item)}
          className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-500 border-pink-500"
        >
          <FiPlus size={14} />
        </button>
      </td>

      <td className="col-span-2 text-gray-600 text-center text-xl font-semibold">
        ${price.toFixed(2)}
      </td>

      <td className="col-span-2 flex justify-center items-center ">
        <span className="text-xl text-gray-600 font-semibold">${total.toFixed(2)}</span>
      </td>
      <td className="col-span-2 flex justify-center items-center">
        <button type="button" onClick={() => onDelete?.(item)} className="text-pink-500">
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
