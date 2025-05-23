import React from "react";
import Slider from "react-slick";
import products from "../data/data";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <main className="container py-5">
      <h2
        className="mb-4 text-center text-uppercase fw-light"
        style={{
          letterSpacing: "3px",
          color: "#e50010",
          fontFamily: "Arial, sans-serif",
        }}
      >
        New Arrivals
      </h2>

      <Slider {...settings}>
        {products.map(({ id, name, price, image }) => (
          <div key={id} className="px-2">
            <div className="card border-0" style={{ height: "500px" }}>
              <img
                src={image}
                alt={name}
                className="card-img-top"
                style={{ objectFit: "cover", height: "370px" }}
                loading="lazy"
              />
              <div
                className="card-body px-0 pt-3 text-center d-flex flex-column justify-content-between"
                style={{ height: "calc(100% - 370px)" }}
              >
                <div>
                  <h5
                    className="card-title fw-normal"
                    style={{ fontSize: "1rem", color: "#111" }}
                  >
                    {name}
                  </h5>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.9rem" }}
                  >
                    ${price.toFixed(2)}
                  </p>
                </div>
                <button
                  className="btn btn-outline-dark btn-sm mt-3 px-4"
                  style={{ borderColor: "#e50010", color: "#e50010" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e50010";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#e50010";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#e50010";
                    e.currentTarget.style.borderColor = "#e50010";
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}
