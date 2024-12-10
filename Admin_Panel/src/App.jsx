// import React from 'react'
// import React from "react"
import Header from './Components/Header/Header.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import ProductList from "./Components/ProductList/ProductList.jsx"


const App = () => {
  return (
    <div className='h-lvh w-lvw'>
    <Header />
    <div className='flex'>
    <Sidebar/>
    <ProductList/>
    </div>
    </div>
  )
}

export default App