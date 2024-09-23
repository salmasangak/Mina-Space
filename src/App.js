import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage';
import ProductDashboard from './components/ProductDashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/components/ProductDashboard" element={<ProductDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;