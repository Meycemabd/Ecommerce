// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropDown";
import ProductList from "../components/ProductList";
import Header from "../components/Header";

import "../styles/pagesCSS/Products.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

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

    // Filter nach Kategorie
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter nach Suchbegriff
    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sortierung
    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategories, sortOrder, searchQuery, products]);

  const handleFilterChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <div className="products-page container-fluid px-4">
        <div className="row">
          <div className="col-md-2">
            <FilterSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              onFilterChange={handleFilterChange}
              searchQuery={searchQuery} // ← Neu!
            />
          </div>
          <div className="col-md-10">
            <div className="products-header position-relative mb-5">
              <h2
                className="text-center text-uppercase fw-light mx-auto"
                style={{
                  letterSpacing: "3px",
                  color: "#e50010",
                  fontFamily: "Arial, sans-serif",
                  width: "100%",
                }}
              >
                New Arrivals
              </h2>
              <div className="position-absolute" style={{ top: "0", right: "0" }}>
                <SortDropdown onSortChange={handleSortChange} />
              </div>
            </div>

            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
