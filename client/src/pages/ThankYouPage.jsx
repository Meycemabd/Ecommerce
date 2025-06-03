import React from "react";
import { Link } from "react-router-dom";
import "../styles/pagesCSS/ThankYouPage.css";

export default function ThankYouPage() {
  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <p>You will receive a confirmation email shortly.</p>
        <Link to="/products" className="btn-back-home">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
