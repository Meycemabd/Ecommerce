import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice"; // Falls du das hast

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="h-100 h-custom" style={{
      backgroundColor: "#f8f9fa",
      paddingTop: "80px",   
      paddingBottom: "60px", 
      minHeight: "100vh",    
    }}
  >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shadow-sm border-0 rounded-4">
              <MDBCardBody className="p-4">
                <MDBRow>
                  {/* LEFT SIDE */}
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="/" className="text-body text-decoration-none">
                        <MDBIcon fas icon="arrow-left" className="me-2" />
                        Continue shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1 fs-5 fw-semibold">Shopping cart</p>
                        <p className="mb-0 text-muted small">
                          You have {cart.length} item(s) in your cart
                        </p>
                      </div>
                    </div>

                    {cart.map((item, i) => (
                      <MDBCard className="mb-3 border-0 shadow-sm rounded-4" key={item.id}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={item.image}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt={item.title}
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h6" className="fw-bold mb-1">
                                  {item.title}
                                </MDBTypography>
                                <p className="text-muted small mb-0">
                                  Quantity: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h6" className="mb-0">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </MDBTypography>
                              </div>
                              <a
                                href="#!"
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="ms-3 text-muted hover-danger"
                              >
                                <MDBIcon fas icon="trash-alt" />
                              </a>
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
                        <MDBTypography tag="h5" className="mb-4 fw-bold">
                          Card details
                        </MDBTypography>

                        {/* Payment form can stay the same */}

                        <hr />

                        <div className="d-flex justify-content-between mb-2">
                          <p className="mb-0">Subtotal</p>
                          <p className="mb-0">${total.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <p className="mb-0">Shipping</p>
                          <p className="mb-0">$0.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <strong>Total</strong>
                          <strong>${total.toFixed(2)}</strong>
                        </div>

                        <MDBBtn color="dark" block size="lg" className="rounded-pill">
                          <div className="d-flex justify-content-between">
                            <span>${total.toFixed(2)}</span>
                            <span>
                              Checkout <MDBIcon fas icon="arrow-right" className="ms-2" />
                            </span>
                          </div>
                        </MDBBtn>
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
