import React from "react";
import products from "../../../public/assets.js";

const Collections = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-6 mx-10">
      {products.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-72 p-2"
        >
          <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
            <img
              src={item.productImage}
              alt={item.productName}
              className="object-cover"
            />
            <div className="absolute top-3 right-3 flex space-x-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"></path>
                </svg>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                    stroke="#000111"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                    stroke="#000111"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                    stroke="#000111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-base font-semibold text-gray-800">
              {item.productName}
            </h2>
            <p className="text-sm text-gray-600">${item.productPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
