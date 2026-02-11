export function Price({ current = "", old = "" }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl text-gray-700 font-bold">{current}</span>
      <span className="line-through text-gray-400">{old}</span>
    </div>
  );
}
