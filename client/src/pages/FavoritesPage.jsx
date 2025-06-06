import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/favoritesSlice";
import { addToCart } from "../redux/cartSlice";
import { Trash2, ShoppingCart } from "lucide-react";
import "../styles/pagesCSS/FavoritesPage.css";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <div className="favorites-content">
          <div className="empty-favorites">
            <h3>Your Favorites List is Empty</h3>
            <p>Add some products to your favorites to see them here.</p>
            <Link to="/products" className="browse-btn">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <div className="favorites-content">
        <div className="favorites-header">
          <h2>My Favorites</h2>
          <p>You have {favorites.length} items in your favorites list</p>
        </div>

        <div className="favorites-list">
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
                  onClick={() => handleRemoveFromFavorites(product.id)}
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