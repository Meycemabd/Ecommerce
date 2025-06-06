// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import "../styles/pagesCSS/CheckoutPage.css";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3,4}$/;
    const currentDate = new Date();
    const [expiryMonth, expiryYear] = formData.expiry.split('/');
    const expiryDate = new Date(2000 + parseInt(expiryYear), parseInt(expiryMonth) - 1);

    if (!formData.cardName.trim()) {
      errors.cardName = "Cardholder name is required";
    }

    if (!cardNumberRegex.test(formData.cardNumber.replace(/\s/g, ""))) {
      errors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      errors.expiry = "Please enter a valid expiry date (MM/YY)";
    } else if (expiryDate < currentDate) {
      errors.expiry = "Card has expired";
    }

    if (!cvvRegex.test(formData.cvv)) {
      errors.cvv = "Please enter a valid 3 or 4 digit CVV";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process payment and order
      const orderData = {
        user: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country
        },
        total: total,
        items: cart
      };
      
      dispatch(clearCart());
      navigate("/thank-you", { state: orderData });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* LEFT - SHIPPING FORM */}
        <div className="checkout-form">
          <h2 className="checkout-title">Checkout</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
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
            </div>
          </form>
        </div>

        {/* RIGHT - SUMMARY AND PAYMENT */}
        <div className="checkout-right">
          {/* Order Summary */}
          <div className="checkout-summary">
            <h3 className="section-title">Order Summary</h3>
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

          {/* Payment Info */}
          <div className="payment-section">
            <h4 className="section-title">Payment</h4>
            <div className="payment-form">
              <div className="payment-row">
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                  {formErrors.cardName && (
                    <span className="error-message">{formErrors.cardName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  {formErrors.cardNumber && (
                    <span className="error-message">{formErrors.cardNumber}</span>
                  )}
                </div>
              </div>

              <div className="payment-row">
                <div className="form-group">
                  <label>Expiry Date (MM/YY)</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                  {formErrors.expiry && (
                    <span className="error-message">{formErrors.expiry}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    maxLength="4"
                  />
                  {formErrors.cvv && (
                    <span className="error-message">{formErrors.cvv}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="checkout-submit-btn" onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
