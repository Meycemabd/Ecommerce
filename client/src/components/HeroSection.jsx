import React from 'react';
import '../styles/componentCSS/Hero.css';

export default function HeroSection() {
  return (
    <section className="hero-video-container position-relative overflow-hidden w-100 vh-100">
      <video autoPlay muted loop className="hero-video w-100 h-100 object-fit-cover">
        <source src="/video/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text position-absolute top-50 start-50 translate-middle text-center text-light">
        <h1 className="display-1 fw-bold text-uppercase hero-heading carousel-heading">Summer Sale</h1>
        <p className="lead mt-3 hero-subtext carousel-heading">Up to 50% off · Limited Time Only</p>
      </div>
    </section>
  );
}
