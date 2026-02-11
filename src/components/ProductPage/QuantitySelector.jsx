export function QuantitySelector() {
  return (
    <div className="flex items-center gap-3">
      <button className="text-red-400 w-8 h-8 border rounded-full">-</button>
      <span className="text-black ">1</span>
      <button className="text-red-400 w-8 h-8 border rounded-full">+</button>
    </div>
  );
}
