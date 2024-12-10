// import React from 'react'
// import React from "react"
import Header from './Components/Header/Header.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import ProductList from "./Components/ProductList/ProductList.jsx"


const App = () => {
  return (
    <div className='h-lvh w-lvw'>
      {/* <h1 className="text-3xl font-bold underline">
      Hello!
    </h1> */}
    <Header />
    <Sidebar/>
    <ProductList/>
    </div>
  )
}

export default App