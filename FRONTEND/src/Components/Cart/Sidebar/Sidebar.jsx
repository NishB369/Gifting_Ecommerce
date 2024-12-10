// import React from 'react';
import { SidebarData } from "../../../../public/assets2.js";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-80 text-black bg-white border-black/50 border-2 fixed right-10 top-24 h-[475px] rounded-lg shadow-lg">
      <div className="flex flex-col gap-2 px-2 py-4">
        {SidebarData.map((item, index) => (
          <Link to={`/${item.name}`} key={index}>
          <div
            className="flex items-center gap-4 p-2  rounded-md cursor-pointer transition-all ease-in-out hover:bg-[#0E1534] hover:text-white w-fit"
          >
            <span className={`${item.icon}`}></span>
            <p className="text-md font-semibold -ml-2">{item.name}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;