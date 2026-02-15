import { CartRow } from "./CartRow";

export default function CartTable() {
  return (
    <div className="flex justify-center items-center p-6">
        <table >
      
      {/* Header */}
      <th className="grid grid-cols-14 p-6 text-gray-500 font-medium">
        <td className="col-span-6 text-start ">Item</td>
        <td className="col-span-2 text-center">Quantity</td>
        <td className="col-span-2 text-center">Price</td>
        <td className="col-span-2 text-center">Total Price</td>
        <td className="col-span-1 text-center"></td>
      </th>

      {/* Row */}
      <CartRow />
      <CartRow />
      <CartRow />

    </table>
    </div>
  );
}
