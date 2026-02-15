import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp
} from "react-icons/fa6";

import { FiShare2 } from "react-icons/fi";

export function ProductSocial() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white cursor-pointer">
        <FaFacebookF size={16} />
      </div>

      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white cursor-pointer">
        <FaInstagram size={16} />
      </div>

      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white cursor-pointer">
        <FaXTwitter size={16} />
      </div>

      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white cursor-pointer">
        <FaWhatsapp size={16} />
      </div>

      <button className="ml-3 w-9 h-9 flex items-center justify-center  text-gray-600 hover:bg-gray-100">
        <FiShare2 size={35} />
      </button>
    </div>
  );
}
