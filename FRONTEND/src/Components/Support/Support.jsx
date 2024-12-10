import React from "react";

const Support = () => {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <h2 className="text-center text-2xl font-semibold mb-8">
          We Supported By
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center max-w-sm">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v7.5m3.75-3.75h-7.5M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">EXPRESS DELIVERY</h3>
            <p className="text-sm text-gray-600">
              DHL express delivery worldwide from our bag company
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center max-w-sm">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">PAYMENT IN 3X</h3>
            <p className="text-sm text-gray-600">
              Take advantage of a payment in 3x without fees from $100 of
              purchase
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center max-w-sm">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v7.5m3.75-3.75h-7.5M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">FREE RETURNS</h3>
            <p className="text-sm text-gray-600">
              Free return for 7 days for any order delivered in France
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
