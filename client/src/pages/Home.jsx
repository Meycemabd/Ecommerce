import React from "react";
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import HeroSection from "../components/HeroSection";
import NewsletterSection from '../components/NewsletterSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

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
        <NewsletterSection />
    </>
  );
}
