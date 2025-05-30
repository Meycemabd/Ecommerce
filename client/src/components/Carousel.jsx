// src/components/Carousel.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/componentCSS/Carousel.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} custom-arrow next-arrow`} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} custom-arrow prev-arrow`} onClick={onClick} />;
}

export default function Carousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Fehler beim Laden der Produkte:", err));
  }, []);

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

  return (
    <Slider {...settings}>
      {products.map(({ id, title, price, image }) => (
        <div key={id} className="px-3">
          <Link to={`/product/${id}`} className="text-decoration-none text-dark">
            <div className="carousel-card card d-flex flex-column justify-content-between h-100">
              <img
                src={image}
                alt={title}
                className="carousel-img card-img-top"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/300?text=No+Image")
                }
              />
              <div className="card-body text-center px-0 pt-3">
                <h5 className="carousel-title card-title fw-normal">{title}</h5>
                <p className="carousel-price">{`$${price.toFixed(2)}`}</p>
                <button className="btn carousel-btn">Shop now</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
