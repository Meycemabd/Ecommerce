import React from "react";
import "../styles/componentCSS/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card carousel-card h-100">
        <img
          src={product.image}
          alt={product.title}
          className="carousel-img"
        />
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <h6 className="carousel-title">{product.title}</h6>
          <p className="carousel-price">${product.price.toFixed(2)}</p>
          <button className="btn carousel-btn">Shop now</button>
          </div>
      </div>
    </div>
  );
}
