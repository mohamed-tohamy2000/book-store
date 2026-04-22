import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";

export function ProductSocial() {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const openShare = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`)}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white cursor-pointer"
      >
        <FaFacebookF size={16} />
      </button>

      <button
        type="button"
        onClick={() => openShare(`https://www.instagram.com/`)}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white cursor-pointer"
      >
        <FaInstagram size={16} />
      </button>

      <button
        type="button"
        onClick={() => openShare(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`)}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white cursor-pointer"
      >
        <FaXTwitter size={16} />
      </button>

      <button
        type="button"
        onClick={() => openShare(`https://wa.me/?text=${encodeURIComponent(pageUrl)}`)}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white cursor-pointer"
      >
        <FaWhatsapp size={16} />
      </button>

      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(pageUrl);
          } catch (error) {
            console.log(error);
          }
        }}
        className="ml-3 w-9 h-9 flex items-center justify-center  text-gray-600 hover:bg-gray-100"
      >
        <FiShare2 size={35} />
      </button>
    </div>
  );
}
