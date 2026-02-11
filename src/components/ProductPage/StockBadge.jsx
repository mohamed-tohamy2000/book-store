export function StockBadge({ stock = "" }) {
  return (
    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
      {stock}
    </span>
  );
}
