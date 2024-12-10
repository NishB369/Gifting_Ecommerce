import React from 'react';
import { SidebarData } from "/public/assets/assets.js";

const Sidebar = () => {
  return (
    <div className="w-64 h-full  text-black fixed top-0 left-0 p-4">
      <div className="flex flex-col gap-4">
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-all ease-in-out"
          >
            {/* {item.icon && (
              <div className="w-6 h-6">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
            )} */}
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
