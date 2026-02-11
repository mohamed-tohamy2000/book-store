export function Rating({ value = 0, count = 0 }) {
  return (
    <div className="flex items-center gap-2">
      ⭐⭐⭐⭐☆
      <span className="text-sm text-gray-500">
        ({count} Reviews)
      </span>
      <span className="text-sm">Rate: {value}</span>
    </div>
  );
}
