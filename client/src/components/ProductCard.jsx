import React from "react";
import "../styles/componentCSS/ProductCard.css";

export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card card border-0">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image card-img-top" />
      </div>
      <div className="card-body text-center">
        <h5 className="product-name">{name}</h5>
        <p className="product-price">{`€${price.toFixed(2)}`}</p>
        <button className="buy-btn">Jetzt kaufen</button>
      </div>
    </div>
  );
}
