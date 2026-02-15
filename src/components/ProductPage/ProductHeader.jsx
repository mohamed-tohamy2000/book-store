import { ProductSocial } from "./ProductSocial";

export function ProductHeader({ title = "", description = "" }) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-gray-700 text-2xl font-bold">{title}</h1>
        <ProductSocial/>
      </div>
      <p className="w-220 text-gray-700 text-lg">{description}</p>
    </>
  );
}
