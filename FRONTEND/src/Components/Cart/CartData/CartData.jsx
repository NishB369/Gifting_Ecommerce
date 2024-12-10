import React from "react";

const CartData = () => {
  return (
    <div className="w-[67.5%] text-black bg-white border-black/50 border-2 fixed left-10 top-24 h-auto rounded-lg shadow-lg p-6">
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
            <tr className="border-b">
              <td className="flex items-center gap-4 py-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Floral Print Wrap Dress"
                  className="w-20 h-20 rounded-md"
                />
                <div>
                  <p className="font-medium">Floral Print Wrap Dress</p>
                  <p className="text-sm text-gray-500">Color: Blue</p>
                  <p className="text-sm text-gray-500">Size: 42</p>
                </div>
              </td>
              <td className="py-4">₹20.50</td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border border-gray-300 rounded-md">-</button>
                  <span>2</span>
                  <button className="px-2 py-1 border border-gray-300 rounded-md">+</button>
                </div>
              </td>
              <td className="py-4  text-orange-500">₹41.00</td>
            </tr>

            <tr>
              <td className="flex items-center gap-4 py-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Floral Print Wrap Dress"
                  className="w-20 h-20 rounded-md"
                />
                <div>
                  <p className="font-medium">Floral Print Wrap Dress</p>
                  <p className="text-sm text-gray-500">Color: Red</p>
                  <p className="text-sm text-gray-500">Size: 42</p>
                </div>
              </td>
              <td className="py-4">₹30.50</td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border border-gray-300 rounded-md">-</button>
                  <span>1</span>
                  <button className="px-2 py-1 border border-gray-300 rounded-md">+</button>
                </div>
              </td>
              <td className="py-4  text-orange-500">₹30.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartData;
