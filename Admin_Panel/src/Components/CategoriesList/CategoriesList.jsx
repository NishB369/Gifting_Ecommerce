import React from "react";
import { categories } from "../../../public/assets/categories.js";


const CategoriesList = () => {
  const currentItems = categories;
  return (
    <div className="p-4 border-2 border-black/25 ml-56 rounded-xl mt-24 w-[80%] ">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-xl font-bold">Categories List</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md">
            <span className="bi bi-filter mr-2"></span>Filter
          </button>
          <button className="px-4 py-2 bg-[#0E1534] text-white rounded-md">
            <span className="bi bi-plus-circle mr-2"></span>Add Product
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
              Category Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
                Products Count
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
                Last Updated
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
          {currentItems.map((categories, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 px-4 py-2 flex items-center gap-5 h-[50px]">
                {categories.categoryName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {categories.productsCount}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {categories.lastUpdated}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    categories.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : categories.status === "Draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : categories.status === "Out of Stock"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {categories.status}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-3">
                <button className="px-3 py-1 bg-[#0e1534e2] text-white rounded-md">
                  <span className="bi bi-pencil mr-2"></span>Edit
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded-md">
                  <span className="bi bi-trash mr"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
