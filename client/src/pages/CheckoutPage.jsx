// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../styles/pagesCSS/CheckoutPage.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { total } = useLocation().state || { total: 0 };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
    }
    // Format expiry date
    else if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{0,2})/, "$1/$2")
        .substr(0, 5);
    }
    // Format CVV
    else if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").substr(0, 3);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Speichere die Bestelldaten für die ThankYouPage
    const orderData = {
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      },
      shipping: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
      total: total,
      items: cart,
    };
    
    // Leere den Warenkorb
    dispatch(clearCart());
    
    // Weiterleitung zur LoadingPage mit den Bestelldaten
    navigate("/loading", { state: { orderData } });
  };

  return (
    <div className="checkout-page">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shadow-sm border-0 rounded-4">
              <MDBCardBody className="p-4">
                <MDBRow>
                  {/* LEFT - SHIPPING FORM */}
                  <MDBCol lg="7">
                    <MDBTypography tag="h6" className="mb-3">
                      <a href="/cart" className="text-body checkout-back-link d-flex align-items-center">
                        <MDBIcon fas icon="arrow-left" className="me-3 fs-5 text-secondary" />
                        <span className="fw-light fs-6">Back to Cart</span>
                      </a>
                    </MDBTypography>

                    <hr />

                    <form onSubmit={handleSubmit}>
                      <MDBTypography tag="h5" className="checkout-form-heading">
                        Shipping Information
                      </MDBTypography>

                      <MDBRow>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                      </MDBRow>

                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <MDBRow>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                        <MDBCol md="3" className="mb-3">
                          <label className="form-label">State</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                        <MDBCol md="3" className="mb-3">
                          <label className="form-label">ZIP Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h5" className="checkout-form-heading mt-4">
                        Payment Information
                      </MDBTypography>

                      <div className="mb-3">
                        <label className="form-label">Card Number</label>
                        <input
                          type="text"
                          className="form-control card-number-input"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Name on Card</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <MDBRow>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">Expiry Date</label>
                          <input
                            type="text"
                            className="form-control expiry-input"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            required
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                          <label className="form-label">CVV</label>
                          <input
                            type="password"
                            className="form-control cvv-input"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength="3"
                            required
                          />
                        </MDBCol>
                      </MDBRow>

                      <button
                        type="submit"
                        className="checkout-submit-btn"
                        disabled={cart.length === 0}
                      >
                        Place Order
                      </button>
                    </form>
                  </MDBCol>

                  {/* RIGHT - ORDER SUMMARY */}
                  <MDBCol lg="5">
                    <MDBCard className="bg-white text-dark rounded-4 shadow-sm">
                      <MDBCardBody>
                        <MDBTypography tag="h5" className="checkout-card-heading">
                          Order Summary
                        </MDBTypography>

                        <hr />

                        <div className="d-flex justify-content-between mb-2 checkout-card-row">
                          <p className="checkout-card-label">Subtotal</p>
                          <p className="checkout-card-value">${total.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2 checkout-card-row">
                          <p className="checkout-card-label">Shipping</p>
                          <p className="checkout-card-value">$0.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4 checkout-card-total-row">
                          <strong className="checkout-card-total-label">Total</strong>
                          <strong className="checkout-card-total-value">${total.toFixed(2)}</strong>
                        </div>

                        <div className="checkout-card-items">
                          {cart.map((item) => (
                            <div key={item.id} className="checkout-card-item">
                              <div className="checkout-card-item-image">
                                <img src={item.image} alt={item.title} />
                              </div>
                              <div className="checkout-card-item-details">
                                <p className="checkout-card-item-title">{item.title}</p>
                                <p className="checkout-card-item-quantity">Qty: {item.quantity}</p>
                              </div>
                              <p className="checkout-card-item-price">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
