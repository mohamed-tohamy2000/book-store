export function Rating({ value = 0, count = 0 }) {
  return (
    <div className="flex flex-col  gap-6">
      <div >
        ⭐⭐⭐⭐☆
      <span className="text-sm text-gray-500">
        ({count} Reviews)
      </span>
      </div>
      <span className="text-gray-600 text-lg font-bold">Rate: <span className="text-gray-400 text-lg font-semibold">{value}</span></span>
    </div>
  );
}
