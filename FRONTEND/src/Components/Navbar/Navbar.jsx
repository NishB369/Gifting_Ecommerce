import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <nav className="flex flex-col px-6 md:px-16 py-4">
       
        <div className="flex items-center justify-between">
          <div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold text-lg">Gift Nation</span>
          </div>

          <div className="flex items-center space-x-4">
            {[
              "M12 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z",
              "M21 12.5A8.5 8.5 0 1 1 12.5 4a8.5 8.5 0 0 1 8.5 8.5Zm-4.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z",
              "M5.5 2a3.5 3.5 0 0 1 3.5 3.5v13a.5.5 0 0 1-.854.354L5 15.207l-3.146 3.647A.5.5 0 0 1 1 18.5v-13A3.5 3.5 0 0 1 5.5 2ZM6 9h6V8H6v1Z",
            ].map((iconPath, index) => (
              <button
                key={index}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            {["Men", "Women", "Children", "Brand", "New", "Popular"].map(
              (item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Search */}
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">
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
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200"
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
