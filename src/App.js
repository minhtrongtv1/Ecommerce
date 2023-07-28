import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductSaleCard from "./components/ProductSaleCard";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route exact path="/" element={<ProductSaleCard />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
