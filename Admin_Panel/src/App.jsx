import React from "react"; // Optional for React 17+ but leave it for compatibility
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import CategoriesList from "./Components/CategoriesList/CategoriesList.jsx";
import { Routes, Route } from "react-router-dom"; // Correctly import these components

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Categories" element={<CategoriesList />} />
      </Routes>
    </>
  );
};

export default App;
