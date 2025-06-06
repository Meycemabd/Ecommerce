import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { Heart, ShoppingBag } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/componentCSS/Carousel.css";

// Custom next arrow
function NextArrow({ className, onClick }) {
  return <div className={`${className} custom-arrow next-arrow`} onClick={onClick} />;
}

// Custom previous arrow
function PrevArrow({ className, onClick }) {
  return <div className={`${className} custom-arrow prev-arrow`} onClick={onClick} />;
}

export default function Carousel() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  // Load products on mount
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "0px" } }
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  // Hilfsfunktion: Nur die ersten 3 Wörter des Titels anzeigen
  const getShortTitle = (title) => {
    return title.split(" ").slice(0, 3).join(" ");
  };

  return (
    <Slider {...settings}>
      {products.map((product) => {
        const isFavorite = favorites.some(item => item.id === product.id);
        const isInCart = cart.some(item => item.id === product.id);
        return (
          <div key={product.id} className="px-3">
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
              <div className="carousel-card card h-100 d-flex flex-column justify-content-between">
                <div className="position-relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="carousel-img card-img-top" 
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/300?text=No+Image")
                    }
                  />
                  <div className="carousel-icons">
                    <button
                      className={`carousel-icon-btn favorite-btn ${isFavorite ? 'active' : ''}`}
                      onClick={(e) => handleFavoriteClick(e, product)}
                    >
                      <Heart
                        size={20}
                        color="#111"
                      />
                    </button>
                    <button
                      className={`carousel-icon-btn cart-btn ${isInCart ? 'active' : ''}`}
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingBag 
                        size={20} 
                      />
                    </button>
                  </div>
                </div>
                <div className="card-body text-center px-0 pt-3">
                  <h5 className="carousel-title">{getShortTitle(product.title)}</h5>
                  <p className="carousel-price">${product.price.toFixed(2)}</p>
                  <button className="btn carousel-btn">Shop now</button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
}
