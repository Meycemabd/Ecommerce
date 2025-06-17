import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/ProductList.css";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (productId) => {
    const productToDelete = products.find((product) => product.id === productId);
    if (!productToDelete) return;

    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    toast.error(`"${productToDelete.title}" deleted.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const categories = [
    "all",
    "accessories",
    "bags",
    "hats",
    "jackets",
    "pants",
    "shirts",
    "shoes",
    "socks",
    "underwear",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return sortConfig.direction === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    } else {
      return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
    }
  });

  return (
    <div className="product-list-container">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <div className="product-list-header">
        <h2>Product List</h2>
        <div className="product-list-actions">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
            style={{ marginLeft: "10px", padding: "6px 8px" }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <Link to="/admin/products/new" className="add-product-btn" style={{ marginLeft: "auto" }}>
            + Add New Product
          </Link>
        </div>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={() => handleSort("title")} className="sortable">
                Title {sortConfig.key === "title" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("category")} className="sortable">
                Category{" "}
                {sortConfig.key === "category" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("price")} className="sortable">
                Price {sortConfig.key === "price" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    {product.imageFile ? (
                      <img
                        src={product.imageFile}
                        alt={product.title}
                        className="product-image"
                        style={{ maxWidth: "50px", borderRadius: "4px" }}
                      />
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                  </td>
                  <td>{product.title || "—"}</td>
                  <td>{product.category || "—"}</td>
                  <td>€ {parseFloat(product.price || 0).toFixed(2)}</td>
                  <td>
                    <div className="action-buttons">
                    <Link to={`/admin/products/${product.id}`} className="action-btn view">
                      <FiEye />
                    </Link>

                      <Link to={`/admin/products/edit/${product.id}`} className="action-btn edit">
                        <FiEdit2 />
                      </Link>
                      <button
                        className="action-btn delete"
                        onClick={() => handleDelete(product.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
