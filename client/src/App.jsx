import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

// Seiten & Komponenten
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage searchQuery={searchQuery} />} />
      </Routes>
    </>
  );
}

export default App;
