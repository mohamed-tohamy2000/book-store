export function QuantitySelector({ quantity = 1, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onDecrease}
        className="text-red-400 w-8 h-8 border rounded-full"
      >
        -
      </button>
      <span className="text-black ">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="text-red-400 w-8 h-8 border rounded-full"
      >
        +
      </button>
    </div>
  );
}
