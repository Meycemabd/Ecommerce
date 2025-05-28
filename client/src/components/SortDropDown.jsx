import React from "react";
import "../styles/componentCSS/SortDropdown.css";

export default function SortDropdown({ onSortChange }) {
  return (
<div className="sort-dropdown d-flex align-items-center me-3">
<label htmlFor="sort" className="me-2 mb-0 text-muted">Sort By:</label>
      <select
        id="sort"
        className="form-select form-select-sm custom-sort-select"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
