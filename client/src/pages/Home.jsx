import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components.css"; 
import Header from '../components/Header';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container py-5">
        <h2
          className="mb-5 text-center text-uppercase fw-light"
          style={{
            letterSpacing: "3px",
            color: "#e50010",
            fontFamily: "Arial, sans-serif",
            marginBottom: "3rem",
          }}
        >
          New Arrivals
        </h2>

        <Carousel />
      </main>
    </>
  );
}
