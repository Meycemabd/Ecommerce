// src/components/SortDropdown.jsx
import React from "react";
import "../styles/componentCSS/SortDropdown.css";

export default function SortDropdown({ onSortChange }) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort" className="me-2 text-muted">Sort by</label>
      <select
        id="sort"
        className="form-select"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
