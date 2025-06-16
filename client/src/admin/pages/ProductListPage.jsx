import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import "../Styles/ProductList.css";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Produkte aus localStorage laden
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Produkt löschen
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  };

  // Sortieren
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Sortierte Produkte
  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return sortConfig.direction === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    } else {
      return sortConfig.direction === 'asc'
        ? aVal - bVal
        : bVal - aVal;
    }
  });

  // Gefilterte Produkte (Suche)
  const filteredProducts = sortedProducts.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
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
          <Link to="/admin/products/new" className="add-product-btn">
            + Add New Product
          </Link>
        </div>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={() => handleSort('title')} className="sortable">
                Title {sortConfig.key === 'title' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('category')} className="sortable">
                Category {sortConfig.key === 'category' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('price')} className="sortable">
                Price {sortConfig.key === 'price' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  {product.imageFile ? (
                    <img
                      src={product.imageFile}
                      alt={product.title}
                      className="product-image"
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </td>
                <td>{product.title || "—"}</td>
                <td>{product.category || "—"}</td>
                <td>${parseFloat(product.price || 0).toFixed(2)}</td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/admin/products/detail/${product.id}`} className="action-btn view">
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
            ))}
            {filteredProducts.length === 0 && (
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
