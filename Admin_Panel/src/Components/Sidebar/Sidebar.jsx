// import React from 'react';
import { SidebarData } from "/public/assets/assets.js";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-48 text-black p-4 bg-[#F6F6F6] border-r-black/25 border-r-2 fixed left-0 top-10 h-full pt-16">
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