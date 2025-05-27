// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

// ✅ Korrekte Importe der Komponenten (nicht CSS!)
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropDown";
import ProductList from "../components/ProductList";

// ✅ Optional: CSS separat
import "../styles/pagesCSS/Products.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const uniqueCategories = [...new Set(res.data.map((p) => p.category))];
      setProducts(res.data);
      setCategories(uniqueCategories);
      setFilteredProducts(res.data);
    });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOrder, products]);

  const handleFilterChange = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="products-page container-fluid px-4">
      <div className="row">
        <div className="col-md-3">
          <FilterSidebar
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="col-md-9">
          <div className="products-header d-flex justify-content-between align-items-center mb-3">
            <h2 className="products-title">All Products</h2>
            <SortDropdown onSortChange={handleSortChange} />
          </div>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
