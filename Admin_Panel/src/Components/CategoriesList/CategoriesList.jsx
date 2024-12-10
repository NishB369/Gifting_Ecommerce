import React, { useState } from "react";
import { categories } from "../../../public/assets/categories.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const CategoriesList = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const currentItems = categories;
  const [formData, setFormData] = useState({
    image: "",
    productName: "",
    category: "",
    price: "",
    stock: "",
    status: "Draft",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Product Saved!");
  };


  return (
    <div className="p-4 border-2 border-black/25 ml-56 rounded-xl mt-24 w-[80%] ">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-xl font-bold">Categories List</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md">
            <span className="bi bi-filter mr-2"></span>Filter
          </button>
          <Popover>
            <PopoverTrigger>
              <button
                className="px-4 py-2 bg-[#0E1534] text-white rounded-md"
                onClick={() => setIsPopoverOpen(true)}
              >
                <span className="bi bi-plus-circle mr-2"></span>
                Add Category
              </button>
            </PopoverTrigger>
            {isPopoverOpen && (
              <PopoverContent>
                <div className="p-6 scale-[0.85] w-[50%] bg-[#0E1534] shadow-3xl rounded-lg text-white">
                  <div className="flex items-center justify-between py-2">
                    <h2 className="text-3xl font-bold">Add New Category</h2>
                    <button
                      onClick={() => setIsPopoverOpen(false)}
                      className="bi bi-x-circle text-white text-3xl cursor-pointer hover:scale-[1.1] duration-200 ease-in-out"
                    ></button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className="block text-md font-medium mb-1"
                        htmlFor="productName"
                      >
                        Category Name
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                        required
                        className="block w-full px-4 py-2 text-black  placeholder:text-slate-800 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>


                    <div>
                      <label
                        className="block text-md font-medium mb-1"
                        htmlFor="price"
                      >
                        Products Count
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Enter price"
                        required
                        className="block w-full px-4 py-2 text-black  placeholder:text-slate-800 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-md font-medium mb-1"
                        htmlFor="status"
                      >
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 text-black  border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      >
                        <option value="Launch">Active</option>
                        <option value="Draft">Inactive</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Save Product
                    </button>
                  </form>
                </div>
              </PopoverContent>
            )}
          </Popover>
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
