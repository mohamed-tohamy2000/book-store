export default function PriceRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600 font-bold">{label}</span>
      <span
        className={`font-medium text-gray-500 ${
          highlight ? "text-pink-600 text-lg  font-semibold" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
