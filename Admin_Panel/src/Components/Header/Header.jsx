// import React from 'react'
// import image from ''

const Header = () => {
  return (
    <div className="flex justify-between px-12 py-6 bg-[#F6F6F6] w-full h-[12%] border-b-2 border-b-black/25 fixed top-0 z-10">
        <div><img src='../../assets/logo.svg' width={150} className="cursor-pointer"/></div>
        <div className="flex items-center justify-between w-[10%]">
          <span className="cursor-pointer bi bi-search bg-[#0E1534] flex items-center justify-center p-2 text-white rounded-full text-sm hover:scale-[1.1] duration-300 ease-in-out"></span>
          <span className="cursor-pointer bi bi-bell bg-[#0E1534] flex items-center justify-center p-2 text-white rounded-full text-sm hover:scale-[1.1] duration-300 ease-in-out"></span>
          <span className="cursor-pointer bi bi-person-fill bg-[#0E1534] flex items-center justify-center p-2 text-white rounded-full text-sm hover:scale-[1.1] duration-300 ease-in-out"></span>
        </div>
    </div>
  )
}

export default Header