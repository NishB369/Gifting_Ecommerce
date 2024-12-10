import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <nav className="flex flex-col px-6 md:px-16 py-6 gap-2">

        <div className="flex items-center justify-between">
          <div className="bi bi-list bi bi-heart bg-black p-2 rounded-full text-white flex items-center justify-center hover:scale-[1.1] duration-200 ease-in-out cursor-pointer"></div>
          <div className="text-2xl font-bold">GiftNation</div>
          <div className="flex items-center justify-center gap-2">
            <span className="bi bi-heart bg-black p-2 rounded-full text-white flex items-center justify-center hover:scale-[1.1] duration-200 ease-in-out cursor-pointer"></span>
            <span className="bi bi-cart bg-black p-2 rounded-full text-white flex items-center justify-center hover:scale-[1.1] duration-200 ease-in-out cursor-pointer"></span>
            <span className="bi bi-person bg-black p-2 rounded-full text-white flex items-center justify-center hover:scale-[1.1] duration-200 ease-in-out cursor-pointer"></span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Navigation Links */}
          <div className="flex items-center space-x-2 ">
            {["Corporate", "Functions", "New Year", "Christmas", "New Addons" , "Popular"].map(
              (item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 border-[1px] border-black/50"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Search */}
          <div className="flex items-center justify-between px-8 py-2 border-[1px] border-black/50 bg-gray-100 rounded-full shadow-sm w-[26%] hover:bg-gray-200">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-800 placeholder-gray-600"
            />
            <button className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </button>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-4">
            {["About", "FAQs"].map((item, index) => (
              <button
                key={index}
                className="px-4 py-2 border-[1px] border-black/50 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
