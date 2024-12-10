import React from "react";

const Support = () => {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <h2 className="text-center text-2xl font-semibold mb-8">We Supported By</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
          <div className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center max-w-sm">
            <div className="mb-4">
              <svg
                fill="#000000"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.48 12c-.13.004-.255.058-.347.152l-2.638 2.63-1.625-1.62c-.455-.474-1.19.258-.715.712l1.983 1.978c.197.197.517.197.715 0l2.995-2.987c.33-.32.087-.865-.367-.865zM.5 16h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-4h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3C.223 9 0 8.777 0 8.5S.223 8 .5 8zm24 11c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-13-1C10.125 19 9 20.125 9 21.5s1.125 2.5 2.5 2.5 2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5s-.666 1.5-1.5 1.5-1.5-.666-1.5-1.5.666-1.5 1.5-1.5zm-5-14C5.678 6 5 6.678 5 7.5v11c0 .822.678 1.5 1.5 1.5h2c.676.01.676-1.01 0-1h-2c-.286 0-.5-.214-.5-.5v-11c0-.286.214-.5.5-.5h13c.286 0 .5.214.5.5V19h-5.5c-.66 0-.648 1.01 0 1h7c.66 0 .654-1 0-1H21v-9h4.227L29 15.896V18.5c0 .286-.214.5-.5.5h-1c-.654 0-.654 1 0 1h1c.822 0 1.5-.678 1.5-1.5v-2.75c0-.095-.027-.19-.078-.27l-4-6.25c-.092-.143-.25-.23-.422-.23H21V7.5c0-.822-.678-1.5-1.5-1.5z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">EXPRESS DELIVERY</h3>
            <p className="text-sm text-gray-600">
              DHL express delivery worldwide from our bag company
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center max-w-sm">
            <div className="mb-4">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path
                  d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">PAYMENT IN 3X</h3>
            <p className="text-sm text-gray-600">
              Take advantage of a payment in 3x without fees from $100 of
              purchase
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center max-w-sm">
            <div className="mb-4">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                stroke="#000000"
                fill="none"
              >
                <path
                  d="M54.89,26.73A23.52,23.52,0,0,1,15.6,49"
                  strokeLinecap="round"
                ></path>
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
