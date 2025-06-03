import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import "../styles/pagesCSS/CartPage.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shadow-sm border-0 rounded-4">
              <MDBCardBody className="p-4">
                <MDBRow>
                  {/* LEFT SIDE */}
                  <MDBCol lg="7">
                    <MDBTypography tag="h6" className="mb-3">
                      <a href="/" className="text-body cart-back-link d-flex align-items-center">
                        <MDBIcon fas icon="arrow-left" className="me-3 fs-5 text-secondary" />
                        <span className="fw-light fs-6">Continue Shopping</span>
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="cart-title">Shopping Cart</p>
                        <p className="cart-subtitle">
                          You have {cart.length} item(s) in your cart
                        </p>
                      </div>
                    </div>

                    {cart.map((item) => (
                      <MDBCard className="mb-3 border-0 shadow-sm rounded-4" key={item.id}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                              <MDBCardImage
                                src={item.image}
                                fluid
                                className="rounded-3"
                                style={{ width: "65px" }}
                                alt={item.title}
                              />
                              <div className="ms-3">
                                <MDBTypography tag="h6" className="cart-product-title">
                                  {item.title}
                                </MDBTypography>

                                {/* Quantity Controls */}
                                <div className="d-flex align-items-center mt-2">
                                  <button
                                    className="quantity-btn"
                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                  >
                                    <MDBIcon fas icon="minus" />
                                  </button>
                                  <span className="mx-3 cart-quantity-number">{item.quantity}</span>
                                  <button
                                    className="quantity-btn"
                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                  >
                                    <MDBIcon fas icon="plus" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <MDBTypography tag="h6" className="cart-product-price mb-0">
                                ${(item.price * item.quantity).toFixed(2)}
                              </MDBTypography>
                              <button
                                className="cart-trash-btn"
                                onClick={() => dispatch(removeFromCart(item.id))}
                              >
                                <MDBIcon fas icon="trash-alt" />
                              </button>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>

                  {/* RIGHT SIDE */}
                  <MDBCol lg="5">
                    <MDBCard className="bg-white text-dark rounded-4 shadow-sm">
                      <MDBCardBody>
                        <MDBTypography tag="h5" className="cart-card-heading">
                          Order Summary
                        </MDBTypography>

                        <hr />

                        <div className="d-flex justify-content-between mb-2 cart-card-row">
                          <p className="cart-card-label">Subtotal</p>
                          <p className="cart-card-value">${total.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2 cart-card-row">
                          <p className="cart-card-label">Shipping</p>
                          <p className="cart-card-value">$0.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4 cart-card-total-row">
                          <strong className="cart-card-total-label">Total</strong>
                          <strong className="cart-card-total-value">${total.toFixed(2)}</strong>
                        </div>

                        <button className="cart-card-checkout-btn">
                          <div className="checkout-inner">
                            <span>${total.toFixed(2)}</span>
                            <span>
                              Checkout <i className="fas fa-arrow-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
