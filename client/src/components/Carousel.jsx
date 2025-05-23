import React from "react";
import Slider from "react-slick";
import products from "../data/data";
import "../styles/components.css"; 

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {products.map(({ id, name, price, image }) => (
        <div key={id} className="px-3">
          <div className="carousel-card card">
            <img
              src={image}
              alt={name}
              className="carousel-img card-img-top"
              loading="lazy"
            />
            <div className="card-body text-center px-0 pt-3">
              <h5 className="carousel-title card-title fw-normal">{name}</h5>
              <p className="carousel-price">{`$${price.toFixed(2)}`}</p>
              <button className="carousel-btn btn btn-outline-dark btn-sm mt-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
