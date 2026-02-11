export function ProductMeta({ meta = [] }) {
  return (
    <div className="flex  gap-4 text-sm text-gray-700">
      {meta.map((item, i) => (
        <span key={i} className="flex flex-col">
          <strong>{item.label}</strong> {item.value}
        </span>
      ))}
    </div>
  );
}
