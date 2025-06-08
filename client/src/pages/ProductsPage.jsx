import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropDown";
import ProductList from "../components/ProductList";
import Toast from "../components/Toast";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  // Daten laden
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const allCategories = Array.from(new Set(data.map((p) => p.category)));
        setCategories(allCategories);
      });
  }, []);

  // Toast anzeigen
  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1500);
  };

  // Kategorie-Filter anwenden
  const handleFilterChange = (selected) => {
    setSelectedCategories(selected);
    filterProducts(searchQuery, selected);
  };

  // Sortierung
  const handleSortChange = (sortOption) => {
    const sortedProducts = [...filteredProducts];
    switch (sortOption) {
      case "price-low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-z-a":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  // Filter anwenden (Suche + Kategorie)
  const filterProducts = (searchText, categories) => {
    let filtered = [...products];
    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.includes(product.category)
      );
    }
    if (searchText.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  // Bei Suchänderung filtern
  useEffect(() => {
    filterProducts(searchQuery, selectedCategories);
  }, [searchQuery]);

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Abstand vom Header */}
      <div
        className="products-page container-fluid px-4"
        style={{ marginTop: "130px", paddingBottom: "50px" }}
      >
        <div className="row">
          <div className="col-md-2">
            <FilterSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              onFilterChange={handleFilterChange}
              searchQuery={searchQuery}
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
              <div
                className="position-absolute"
                style={{ top: "0", right: "0" }}
              >
                <SortDropdown onSortChange={handleSortChange} />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <ProductList
                products={filteredProducts}
                showToast={showToast}
              />
            ) : (
              <div className="text-center mt-5">
                <h5 className="text-muted">
                  No products found matching your search.
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
