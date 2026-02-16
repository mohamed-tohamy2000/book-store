import { CartRow } from "./CartRow";

export default function CartTable() {
  return (
    <div className="w-342.75  flex justify-center items-center ">
        <table >
      
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
       <CartRow />
      <CartRow />
      <CartRow />
     </tbody>

    </table>
    </div>
  );
}
