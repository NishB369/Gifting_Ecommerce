import React, { useState } from "react";
import { products } from "../../../public/assets/gifting_products";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ProductList = () => {

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 border-2 border-black/25 ml-6 rounded-xl mt-4 w-[80%]">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-xl font-bold">Products List</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md">
            <span className="bi bi-filter mr-2"></span>Filter
          </button>
          <Popover>
            <PopoverTrigger>
              <button className="px-4 py-2 bg-[#0E1534] text-white rounded-md">
                <span className="bi bi-plus-circle mr-2">
                </span>
                Add Product
              </button>
            </PopoverTrigger>
            <PopoverContent>
            <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg mt-8">
                    <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="image"
                        >
                          Product Image
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          accept="image/*"
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              image: e.target.files[0],
                            }))
                          }
                          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="productName"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="productName"
                          name="productName"
                          value={formData.productName}
                          onChange={handleInputChange}
                          placeholder="Enter product name"
                          required
                          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="category"
                        >
                          Category
                        </label>
                        <input
                          type="text"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          placeholder="Enter category"
                          required
                          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="price"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="Enter price"
                          required
                          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="stock"
                        >
                          Stock
                        </label>
                        <input
                          type="number"
                          id="stock"
                          name="stock"
                          value={formData.stock}
                          onChange={handleInputChange}
                          placeholder="Enter stock quantity"
                          required
                          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="status"
                        >
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                        >
                          <option value="Draft">Save as Draft</option>
                          <option value="Launch">Launch</option>
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
          {currentItems.map((product, index) => (
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md bg-gray-200 mx-2 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`px-4 py-2 border rounded-md mx-1 ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"   
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md bg-gray-200 mx-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
