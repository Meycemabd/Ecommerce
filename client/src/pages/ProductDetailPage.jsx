import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";
import "../styles/pagesCSS/ProductDetailPage.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // NEU
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = product && favorites.some((f) => f.id === product.id);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Fehler beim Laden des Produkts:", err);
        setError("Produkt konnte nicht geladen werden.");
      });
  }, [id]);

  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>;
  }

  if (!product) {
    return <p className="text-center mt-5">Loading product...</p>;
  }

  const rating = product.rating || { rate: 0, count: 0 };

  const toggleFavorite = () => {
    if (!product) return;
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: Number(quantity) }));
    navigate("/cart"); // AUTOMATISCHE WEITERLEITUNG ZUR CART-SEITE
  };

  return (
    <div className="container product-detail-page">
      <div className="row">
        <div className="col-md-6 text-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="main-image"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/300?text=No+Image")
            }
          />
        </div>

        <div className="col-md-6">
          <h1 className="title">{product.title}</h1>

          <div className="rating mb-2">
            {"★".repeat(Math.round(rating.rate)) +
              "☆".repeat(5 - Math.round(rating.rate))}
            <span className="review-count"> ({rating.count} reviews)</span>
          </div>

          <div className="price-section">
            <span className="new-price">${product.price}</span>
            <span className="old-price">$399.99</span>
            <span className="discount">25% OFF</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="quantity-selection mt-3">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>

          <button
            className="btn btn-dark cart-btn mt-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <button className="btn wishlist-btn mt-2" onClick={toggleFavorite}>
            {isFavorite ? "♥ Remove from Wishlist" : "♡ Add to Wishlist"}
          </button>

          <ul className="advantages mt-4">
            <li>Free shipping on orders over $50</li>
            <li>30-day return policy</li>
            <li>2-year warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
