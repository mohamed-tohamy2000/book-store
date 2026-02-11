export function ProductHeader({ title = "", description = "" }) {
  return (
    <>
      <h1 className="text-gray-700 text-2xl font-bold">{title}</h1>
      <p className="text-gray-700 text-sm">{description}</p>
    </>
  );
}
