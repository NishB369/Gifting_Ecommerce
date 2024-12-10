import React from "react";
import { cartData } from "../../../../public/assets.js";

const CartData = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-[67.5%] text-black bg-white border-black/50 border-2 fixed left-10 top-24 h-auto rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="pb-3">Product</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center gap-4 py-2">
                  <span className="block h-20 w-20 bg-gray-300"></span>
                  <div>
                    <p className="font-medium">{item.productName}</p>
                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                  </div>
                </td>
                <td className="py-4">₹{item.productPrice}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 border border-gray-300 rounded-md">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border border-gray-300 rounded-md">+</button>
                  </div>
                </td>
                <td className="py-4 text-orange-500">
                  ₹{(item.productPrice * 1).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="mt-16">
      <button
        onClick={handlePrint}
        className="absolute bottom-6 right-6 px-4 py-2 bg-[#0E1534] text-white rounded-md"
      >
        Print
      </button>
      </div>
    </div>
  );
};

export default CartData;
