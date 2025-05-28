// src/components/FilterSidebar.jsx
import React from "react";
import "../styles/componentCSS/FilterSidebar.css";

const FilterSidebar = ({ categories = [], selectedCategories = [], onFilterChange }) => {
  return (
    <aside className="filter-sidebar">
      <h2>
        Search results for: <span className="highlight">Bluetooth</span>
      </h2>

      <div className="filter-section">
        <h3>Category</h3>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <input
                type="checkbox"
                id={`cat-${cat}`}
                checked={selectedCategories.includes(cat)}
                onChange={() => onFilterChange(cat)}
              />
              <label htmlFor={`cat-${cat}`}>{cat}</label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
