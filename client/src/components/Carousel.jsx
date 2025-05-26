import React from "react";
import Slider from "react-slick";
import products from "../data/data";
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
      {products.map(({ id, name, price, image }) => (
        <div key={id} className="px-3">
          {/* Bootstrap Utility Classes für Flex-Layout benutzen */}
          <div className="carousel-card card d-flex flex-column justify-content-between h-100">
            <img src={image} alt={name} className="carousel-img card-img-top" />
            <div className="card-body text-center px-0 pt-3">
              <h5 className="carousel-title card-title fw-normal">{name}</h5>
              <p className="carousel-price">{`$${price.toFixed(2)}`}</p>
              <button className="btn carousel-btn">Shop now</button>

            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
