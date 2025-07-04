import React from "react";
import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";
import { useCart } from "../context/CartContext";
import { Trash2, ShoppingCart } from "lucide-react";
import "../styles/pagesCSS/FavoritePage.css";

export default function FavoritePage() {
  const { favorites, removeFromFavorites } = useFavorite();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromFavorites(product.id);
  };

  if (favorites.length === 0) {
    return (
      <div className="favorite-container">
        <div className="favorite-content">
          <div className="empty-favorites">
            <h3>Your Favorites List is Empty</h3>
            <p>Add some products to your favorites to see them here.</p>
            <Link to="/" className="browse-btn">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorite-container">
      <div className="favorite-content">
        <div className="favorite-header">
          <h2>My Favorites</h2>
          <p>You have {favorites.length} items in your favorites list</p>
        </div>

        <div className="favorite-list">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <img src={product.image} alt={product.title} />
              <div className="item-details">
                <h3 className="item-title">{product.title}</h3>
                <p className="item-price">${product.price.toFixed(2)}</p>
              </div>
              <div className="item-actions">
                <button
                  className="action-btn remove-btn"
                  onClick={() => removeFromFavorites(product.id)}
                >
                  <Trash2 size={16} />
                </button>
                <button
                  className="action-btn cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 