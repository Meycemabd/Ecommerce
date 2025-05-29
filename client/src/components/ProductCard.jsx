// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/componentCSS/ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate(); // ← hinzufügen

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // ← Zielseite
  };

  return (
    <div
      className="card carousel-card d-flex flex-column justify-content-between h-100"
      onClick={handleCardClick} // ← ganze Karte klickbar
      style={{ cursor: "pointer" }} // ← optisches Feedback
    >
      <img
        src={product.image}
        alt={product.title}
        className="carousel-img card-img-top"
      />
      <div className="card-body text-center px-0 pt-3">
        <h5 className="carousel-title card-title fw-normal">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h5>
        <p className="carousel-price">${product.price.toFixed(2)}</p>
        <button
          className="btn carousel-btn"
          onClick={(e) => {
            e.stopPropagation(); 
            navigate(`/product/${product.id}`);
          }}
        >
          View Product
        </button>
      </div>
    </div>
  );
}
