import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import "../styles/componentCSS/Carousel.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button className="carousel-arrow next" onClick={onClick}>
    <span>→</span>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="carousel-arrow prev" onClick={onClick}>
    <span>←</span>
  </button>
);

export default function Carousel() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const handleFavoriteClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const isFavorite = favorites.some(item => item.id === product.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const isInCart = cart.some(item => item.id === product.id);
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const getShortTitle = (title) => {
    return title.split(" ").slice(0, 3).join(" ");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="carousel-slide">
            <div className="product-card">
              <div className="product-card-icons">
                <button
                  className={`product-card-icon-btn product-card-favorite-btn ${
                    favorites.some(item => item.id === product.id) ? "active" : ""
                  }`}
                  onClick={(e) => handleFavoriteClick(e, product)}
                >
                  <Heart size={18} />
                </button>
                <button
                  className={`product-card-icon-btn product-card-cart-btn ${
                    cart.some(item => item.id === product.id) ? "active" : ""
                  }`}
                  onClick={(e) => handleAddToCart(e, product)}
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
