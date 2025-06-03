// src/pages/CheckoutPage.jsx
import React from "react";
import "../styles/pagesCSS/CheckoutPage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Validierung oder Logik
    navigate("/thank-you");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* LEFT - FORM */}
        <div className="checkout-form">
          <h2
            className="mb-4 text-center text-uppercase fw-light"
            style={{
              letterSpacing: "3px",
              color: "#e50010",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Checkout
          </h2>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required />

            <label>Email</label>
            <input type="email" placeholder="john@example.com" required />

            <label>Address</label>
            <input type="text" placeholder="123 Main St" required />

            <label>City</label>
            <input type="text" placeholder="Berlin" required />

            <label>Postal Code</label>
            <input type="text" placeholder="10115" required />

            <label>Country</label>
            <select required>
              <option value="">Select your country</option>
              <option value="Germany">Germany</option>
              <option value="Austria">Austria</option>
              <option value="Switzerland">Switzerland</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Belgium">Belgium</option>
              <option value="Spain">Spain</option>
              <option value="Poland">Poland</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>

            <button type="submit" className="checkout-submit-btn">
              Place Order
            </button>
          </form>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div className="summary-title">{item.title}</div>
                <div className="summary-quantity">Qty: {item.quantity}</div>
                <div className="summary-price">
                  € {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>€ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
