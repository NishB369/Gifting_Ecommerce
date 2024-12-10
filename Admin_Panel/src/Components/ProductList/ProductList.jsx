import React from "react";
import { products } from "../../../public/assets/gifting_products";

const ProductList = () => {
  return (
    <div className="p-4 border border-gray-300  mx-10 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Products List</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md">Filter</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Add Product
          </button>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <input type="checkbox" />
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Product Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Category
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Stock
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Status
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 px-4 py-2 flex items-center gap-5">
                <span className="block h-10 w-10 bg-slate-300 border border-black"></span>{" "}
                {product.productName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ₹{product.price.toFixed(2)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.stock}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    product.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : product.status === "Draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : product.status === "Out of Stock"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-3">
                <button className="px-2 py-1 bg-gray-200 rounded-md">
                  Delete
                </button>
                <button className="px-2 py-1 bg-gray-200 rounded-md">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
