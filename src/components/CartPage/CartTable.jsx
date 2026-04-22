import { CartRow } from "./CartRow";

export default function CartTable({
  items = [],
  onIncrease,
  onDecrease,
  onDelete,
  emptyMessage = "No items found",
}) {
  return (
    <div className="w-342.75 flex justify-center items-center">
        <table className="w-full">
      
      {/* Header */}
      <thead >
        <tr className="grid grid-cols-14 p-6 text-gray-500 font-medium">
          <td className="col-span-6 text-start ">Item</td>
        <td className="col-span-2 text-center">Quantity</td>
        <td className="col-span-2 text-center">Price</td>
        <td className="col-span-2 text-center">Total Price</td>
        <td className="col-span-1 text-center"></td>
        </tr>
      </thead>

      {/* Row */}
     <tbody>
      {items.length ? (
        items.map((item, index) => (
          <CartRow
            key={item.id || item.book_id || index}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
          />
        ))
      ) : (
        <tr>
          <td className="p-6 text-center text-gray-500" colSpan={14}>
            {emptyMessage}
          </td>
        </tr>
      )}
     </tbody>

    </table>
    </div>
  );
}
