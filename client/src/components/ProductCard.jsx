// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/componentCSS/ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const favoriteItems = useSelector((state) => state.favorites);

  const isInCart = (id) => cartItems.some((item) => item.id === id);
  const isFavorite = (id) => favoriteItems.some((item) => item.id === id);

  const showToast = (message, type) => {
    toast(message, {
      type,
      position: "top-right",
      autoClose: 2000,
      style: {
        borderRadius: "4px",
        backgroundColor:
          type === "success"
            ? "#e6fff0"
            : type === "info"
            ? "#fff3e6"
            : "#fff",
        color: type === "success" ? "#007f5f" : "#b36b00",
        fontSize: "14px",
      },
    });
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id));
      showToast("Removed from cart", "info");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      showToast("Added to cart", "success");
    }
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite(product.id)) {
      dispatch(removeFromFavorites(product.id));
      showToast("Removed from favorites", "info");
    } else {
      dispatch(addToFavorites(product));
      showToast("Added to favorites", "success");
    }
  };

  const getShortTitle = (title) => title.split(" ").slice(0, 3).join(" ");

  return (
    <div className="product-card">
      <div className="product-card-icons">
        <button
          className={`product-card-icon-btn product-card-favorite-btn ${
            isFavorite(product.id) ? "active" : ""
          }`}
          onClick={handleFavoriteClick}
        >
          <Heart size={18} />
        </button>
        <button
          className={`product-card-icon-btn product-card-cart-btn ${
            isInCart(product.id) ? "active" : ""
          }`}
          onClick={handleCartClick}
        >
          <ShoppingBag size={18} />
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="product-card-link">
        <img
          src={product.image}
          alt={product.title}
          className="product-card-image"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/300?text=No+Image")
          }
        />
        <div className="product-card-content">
          <h3 className="product-card-title">{getShortTitle(product.title)}</h3>
          <p className="product-card-price">${product.price.toFixed(2)}</p>
          <button className="product-card-btn primary">View Product</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
