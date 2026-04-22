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
  freeShipping,
  discountCode,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onAddToCart,
  onAddToWishlist,
  isLoading,
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <ProductHeader title={title} description={description} />
      <ProductMeta meta={meta} />
      <div className="flex justify-between">
        <Rating {...rating} />
        <StockBadge
          stock={stock}
          freeShipping={freeShipping}
          discountCode={discountCode}
        />
      </div>
      <div className="flex justify-between"> 
        <div className="">
          <Price {...price} />
        </div>
        <div className="flex gap-3">
          <QuantitySelector
            quantity={quantity}
            onIncrease={onIncreaseQuantity}
            onDecrease={onDecreaseQuantity}
          />
          <ActionButtons
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
