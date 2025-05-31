import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/componentCSS/ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Kürzt den Titel auf die ersten 3 Wörter
  const getShortTitle = (title) => title.split(" ").slice(0, 3).join(" ");

  return (
    <div
      className="card carousel-card d-flex flex-column justify-content-between h-100"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="carousel-img card-img-top"
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/300?text=No+Image")
        }
      />
      <div className="card-body text-center px-0 pt-3">
        <h5 className="carousel-title card-title fw-normal">
          {getShortTitle(product.title)}
        </h5>
        <p className="carousel-price">${product.price.toFixed(2)}</p>
        <button
          className="btn carousel-btn"
          onClick={(e) => {
            e.stopPropagation(); // Verhindert Navigation beim Button-Klick
            navigate(`/product/${product.id}`);
          }}
        >
          View Product
        </button>
      </div>
    </div>
  );
}
