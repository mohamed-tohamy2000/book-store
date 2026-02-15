import PriceRow from "./PriceRow";

export default function SummaryCard({
  subtotal,
  shipping,
  tax,
  total,
}) {
  return (
    <div className=" w-106 h-93.75 gap-10 ">
      
      <div className=" space-y-3">
        <PriceRow label="Subtotal" value={`$${subtotal}`} />
        <PriceRow label="Shipping" value={shipping} />
        <PriceRow label="Tax" value={`$${tax}`} />
      </div>

      <hr className="text-[#22222233] my-5" />

      <PriceRow
        label="Total"
        value={`$${total}`}
        highlight
      />

      <div className="mt-6 space-y-3">
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition">
          Check out
        </button>

        <button className="w-full border border-pink-600 text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition">
          Keep Shopping
        </button>
      </div>
    </div>
  );
}
