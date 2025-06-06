// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import "../styles/pagesCSS/CheckoutPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

  const [formErrors, setFormErrors] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const validateCardName = (name) => {
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return 'Name can only contain letters and spaces';
    }
    return '';
  };

  const validateCardNumber = (number) => {
    const cleanNumber = number.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cleanNumber)) {
      return 'Card number must contain exactly 16 digits';
    }
    return '';
  };

  const validateExpiry = (expiry) => {
    const [month, year] = expiry.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      return 'Please enter the date in MM/YY format';
    }

    const expMonth = parseInt(month);
    const expYear = parseInt(year);

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      return 'Expiry date must be in the future';
    }

    return '';
  };

  const validateCVV = (cvv) => {
    if (!/^\d{3}$/.test(cvv)) {
      return 'CVV must contain exactly 3 digits';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    let error = '';
    switch (name) {
      case 'cardName':
        error = validateCardName(value);
        break;
      case 'cardNumber':
        error = validateCardNumber(value);
        break;
      case 'expiry':
        error = validateExpiry(value);
        break;
      case 'cvv':
        error = validateCVV(value);
        break;
      default:
        break;
    }

    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake Payment Logik
    if (
      !formData.cardNumber ||
      !formData.cardName ||
      !formData.expiry ||
      !formData.cvv
    ) {
      alert("Please fill out all payment fields.");
      return;
    }

    dispatch(clearCart());

    // Statt direkt zur ThankYou-Seite, erst zur LoadingPage weiterleiten
    navigate("/loading", {
      state: {
        user: formData,
        total,
      },
    });
  };

  return (
    <div className="checkout-page" style={{ 
      maxWidth: '1200px', 
      margin: '80px auto 0',
      padding: '20px',
      minHeight: 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="checkout-container" style={{ 
        display: 'flex',
        gap: '40px'
      }}>
        {/* LEFT - SHIPPING FORM */}
        <div className="checkout-form" style={{ 
          flex: 1.5,
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2
            className="mb-4 text-center text-uppercase fw-light"
            style={{
              letterSpacing: "3px",
              color: "#e50010",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.5rem",
              marginBottom: '30px'
            }}
          >
            Checkout
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Shipping Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ 
                  fontSize: "0.9rem", 
                  padding: "12px",
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  width: '100%'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ 
                  fontSize: "0.9rem", 
                  padding: "12px",
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  width: '100%'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ 
                  fontSize: "0.9rem", 
                  padding: "12px",
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  width: '100%'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  style={{ 
                    fontSize: "0.9rem", 
                    padding: "12px",
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    width: '100%'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  style={{ 
                    fontSize: "0.9rem", 
                    padding: "12px",
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    width: '100%'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                style={{ 
                  fontSize: "0.9rem", 
                  padding: "12px",
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  width: '100%',
                  backgroundColor: '#fff'
                }}
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
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Order Summary */}
          <div className="checkout-summary" style={{ 
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: '20px', fontWeight: '500' }}>Order Summary</h3>
            <div className="summary-items" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {cart.map((item) => (
                <div className="summary-item" key={item.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div className="summary-title" style={{ fontSize: "0.9rem", flex: 1 }}>{item.title}</div>
                  <div className="summary-quantity" style={{ fontSize: "0.9rem", margin: '0 20px' }}>Qty: {item.quantity}</div>
                  <div className="summary-price" style={{ fontSize: "0.9rem", fontWeight: '500' }}>
                    € {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="summary-total" style={{ 
              fontSize: "1.1rem", 
              fontWeight: '500',
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '2px solid #eee',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Total:</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Info */}
          <div style={{ 
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h4 style={{ fontSize: "1.2rem", marginBottom: '20px', fontWeight: '500' }}>Payment</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    style={{ 
                      fontSize: "0.9rem", 
                      padding: "12px",
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      width: '100%'
                    }}
                  />
                  {formErrors.cardName && <span className="error-message" style={{ fontSize: "0.8rem", color: '#ff0000' }}>{formErrors.cardName}</span>}
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    style={{ 
                      fontSize: "0.9rem", 
                      padding: "12px",
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      width: '100%'
                    }}
                  />
                  {formErrors.cardNumber && <span className="error-message" style={{ fontSize: "0.8rem", color: '#ff0000' }}>{formErrors.cardNumber}</span>}
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>Expiry Date (MM/YY)</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    style={{ 
                      fontSize: "0.9rem", 
                      padding: "12px",
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      width: '100%'
                    }}
                  />
                  {formErrors.expiry && <span className="error-message" style={{ fontSize: "0.8rem", color: '#ff0000' }}>{formErrors.expiry}</span>}
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: "0.9rem", fontWeight: '500' }}>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    style={{ 
                      fontSize: "0.9rem", 
                      padding: "12px",
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      width: '100%'
                    }}
                  />
                  {formErrors.cvv && <span className="error-message" style={{ fontSize: "0.8rem", color: '#ff0000' }}>{formErrors.cvv}</span>}
                </div>
              </div>

              <button 
                type="submit" 
                className="checkout-submit-btn" 
                style={{ 
                  fontSize: "1rem", 
                  padding: "15px",
                  width: '100%',
                  marginTop: '10px',
                  backgroundColor: '#000000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#333333'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#000000'}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
