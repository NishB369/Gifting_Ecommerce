import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../src/Page/Home.jsx"
import Cart from "./Components/Cart/Cart.jsx"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
