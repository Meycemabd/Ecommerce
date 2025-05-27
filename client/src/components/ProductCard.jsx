// src/components/ProductCard.jsx
import React from "react";
import "../styles/componentCSS/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="card product-card border-0">
      <img
        src={product.image}
        className="card-img-top img-fluid"
        alt={product.title}
      />
      <div className="card-body text-center">
        <h6 className="product-title">{product.title}</h6>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
