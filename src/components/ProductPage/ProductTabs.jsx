import { ProductDetails } from "./ProductDetails";

export function ProductTabs({ details = [] }) {
  return (
    <div className="mt-12">
      <div className="flex gap-6 border-b mb-6">
        <button className="pb-2 border-b-2 text-gray-700 border-black">
          Product Details
        </button>
        <button className="pb-2 text-gray-700">
          Customer Reviews
        </button>
        <button className="pb-2 text-gray-700">
          Recommended
        </button>
      </div>

      <ProductDetails details={details} />
    </div>
  );
}
