import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { Heart, ShoppingBag, Minus, Plus } from "lucide-react";
import "../styles/pagesCSS/ProductDetailsPage.css";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Produkt konnte nicht geladen werden");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleFavoriteClick = () => {
    const isFavorite = favorites.some(item => item.id === product.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  if (isLoading) return <div className="loading">Laden...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Produkt nicht gefunden</div>;

  const isInCart = cart.some(item => item.id === product.id);
  const isFavorite = favorites.some(item => item.id === product.id);
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-details-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/300?text=No+Image")
            }
          />
        </div>
        <div className="product-details-info">
          <h1 className="product-details-title">{product.title}</h1>
          <p className="product-details-price">${product.price.toFixed(2)}</p>
          <p className="product-details-description">{product.description}</p>
          
          <div className="product-details-actions">
            {isInCart && (
              <div className="quantity-control">
                <button 
                  className="quantity-btn" 
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                  disabled={cartItem.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="quantity-number">{cartItem.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => dispatch(increaseQuantity(product.id))}
                >
                  <Plus size={16} />
                </button>
              </div>
            )}

            <button
              className={`product-details-btn ${isInCart ? "remove" : "add"}`}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={20} />
              {isInCart ? "Aus Warenkorb entfernen" : "In den Warenkorb"}
            </button>

            <button
              className={`product-details-btn favorite ${isFavorite ? "active" : ""}`}
              onClick={handleFavoriteClick}
            >
              <Heart size={20} />
              {isFavorite ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 