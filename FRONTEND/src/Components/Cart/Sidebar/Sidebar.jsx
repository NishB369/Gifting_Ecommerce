// import React from 'react';
// import { SidebarData } from "../../../../public/assets2.js";
// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-80 text-black bg-white border-black/50 border-2 fixed right-10 top-24 h-[475px] rounded-lg shadow-lg px-6 py-[20px]">
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="font-bold text-xl">Coupon Code</div>
        <div className="text-xs font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eveniet
          cum consectetur laborum aliquam qui?
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <input
            placeholder="Add Coupon Code"
            className="placeholder:italic border-2 border-black/50 w-8/12 flex items-center justify-center p-2 rounded-full text-center text-sm"
          ></input>
          <button className="bg-[#0E1534] w-4/12 border-2 border-transparent flex items-center justify-center p-2 rounded-full text-center text-sm text-white font-bold shadow-sm">
            Apply
          </button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center border-[1px] mt-6 border-black"></div>

      <div className="flex flex-col items-start justify-center gap-4 mt-8">
        <div className="font-bold text-xl">Coupon Code</div>
        {[
          { label: "Subtotal 01", value: "Rs. 1234" },
          { label: "Subtotal 02", value: "Rs. 976" },
          { label: "Subtotal 03", value: "Rs. 6543" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full text-sm"
          >
            <div className="font-normal">{item.label}</div>
            <div className="font-bold">{item.value}</div>
          </div>
        ))}
         <div className="flex w-full items-center justify-center border-[1px] mt-2 border-black"></div>
        <div className="text-xl flex items-center justify-between w-full">
          <div>Total Amount</div>
          <div className="font-bold">Rs 98765</div>
        </div>
        <div className="flex w-full items-center justify-center border-[1px]  border-black"></div>
      </div>
    </div>
  );
};

export default Sidebar;
