import { ActionButtons } from "./ActionButtons";
import { Price } from "./Price";
import { ProductHeader } from "./ProductHeader";
import { ProductMeta } from "./ProductMeta";
import { QuantitySelector } from "./QuantitySelector";
import { Rating } from "./Rating";
import { StockBadge } from "./StockBadge";

export function ProductInfo({
  title,
  description,
  meta,
  rating,
  price,
  stock,
  Shipping,
  Discountcode
}) {
  return (
    <div className="space-y-4">
      <ProductHeader title={title} description={description} />
      <ProductMeta meta={meta} />
      <Rating {...rating} />
      <Price {...price} />
      <StockBadge stock={stock} />
      <StockBadge stock={Shipping} />
      <StockBadge stock={Discountcode} />
      <QuantitySelector />
      <ActionButtons />
    </div>
  );
}
