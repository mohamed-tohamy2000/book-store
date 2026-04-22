import img from "../../assets/images/sectionlogo/silider.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "./Button";
import { GrFavorite } from "react-icons/gr";

export default function BookCard({
  item = {},
  onAddToCart,
  onAddToWishlist,
  onOpenDetails,
  isLoading = false,
}) {
  const title = item.title || item.name || "Rich Dad And Poor Dad";
  const description = item.description || item.summary || "No description";
  const author = item.author || item.author_name || "Unknown";
  const year = item.publication_year || item.year || "-";
  const reviewsCount = item.reviews_count || item.reviewsCount || 0;
  const ratingValue = item.rate || item.rating || item.stars_number || 0;
  const image = item.image || item.cover || item.thumbnail || img;
  const price = Number(item.price || item.final_price || 0);
  const oldPrice = Number(item.price_before_discount || item.old_price || 0);
  const discountCode = item.discount_code || item.code || "";

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 border p-2 rounded-2xl">
      <div className="lg:w-1/4 w-full h-63.75">
        <div
          role="button"
          tabIndex={0}
          onClick={() => onOpenDetails?.(item)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              onOpenDetails?.(item);
            }
          }}
          className="h-full w-full"
        >
          <img src={image} alt="" className="h-full w-full  rounded-xl" />
        </div>
      </div>

      <div className="lg:w-3/4 w-full flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="md:w-2/3">
            <div
              role="button"
              tabIndex={0}
              onClick={() => onOpenDetails?.(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onOpenDetails?.(item);
                }
              }}
              className="text-left"
            >
              <h1 className="text-[18px] font-bold text-[#222222]">{title}</h1>
            </div>
            <p className="text-[#22222280] mt-2">{description}</p>
          </div>

          <div className="flex items-start md:items-center">
            {discountCode ? (
              <div className="border border-[#EBC305] rounded-xl bg-white px-3 py-2 h-fit">
                <h1 className="text-[#EBC305] text-sm font-semibold">
                  Discount code: {discountCode}
                </h1>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-400">★★★★</span>
              <span className="font-semibold text-[#22222280] text-[12px]">
                ({reviewsCount} Review)
              </span>
            </div>

            <div className="flex items-center gap-2 text-[16px] mt-1">
              <span className="text-[#00000080]">Rate:</span>
              <span className="text-[#222222] font-semibold">{ratingValue}</span>
            </div>

            <div className="w-55 flex flex-col mt-2">
              <div className="text-[#22222280] text-sm flex justify-between">
                <span>Author</span>
                <span>Year</span>
              </div>
              <div className="text-[#222222] font-semibold text-sm flex justify-between">
                <span>{author}</span>
                <span>{year}</span>
              </div>
            </div>
          </div>

          <div className="md:w-auto w-full flex flex-col gap-4 md:items-end">
            <h1 className="text-[#222222] font-semibold text-[28px]">
              ${price.toFixed(2)}
              {oldPrice ? (
                <span className="text-[#22222280] text-lg line-through ms-2">
                  ${oldPrice.toFixed(2)}
                </span>
              ) : null}
            </h1>

            <div className="flex gap-4 w-full md:w-auto">
              <Button
                classn="flex gap-2 items-center justify-center px-5 py-3 w-full md:w-auto"
                isMainBtn
                disabled={isLoading}
                onClick={() => onAddToCart?.(item)}
              >
                <span>Add To Cart</span>
                <MdOutlineShoppingCart size={20} />
              </Button>

              <Button
                classn="px-4 py-3"
                disabled={isLoading}
                onClick={() => onAddToWishlist?.(item)}
              >
                <GrFavorite size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
