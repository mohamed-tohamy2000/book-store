export default function CheckboxList({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <label
          key={index}
          className="flex items-center justify-between text-sm cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="  w-4 h-4  appearance-none  bg-white  border border-gray-300  rounded  checked:bg-white  checked:border-red-500  checked:before:content-['✓']  checked:before:text-red-500  checked:before:flex  checked:before:items-center  checked:before:justify-center  checked:before:text-xs"
            />

            <span className="text-gray-400">{item.label}</span>
          </div>
          <span className="text-gray-400">({item.count})</span>
        </label>
      ))}
    </div>
  );
}
