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
  
  export default function Basic() {
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#f8f9fa" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard className="shadow-sm border-0 rounded-4">
                <MDBCardBody className="p-4">
                  <MDBRow>
                    {/* LEFT SIDE */}
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <a href="#!" className="text-body text-decoration-none">
                          <MDBIcon fas icon="arrow-left" className="me-2" />
                          Continue shopping
                        </a>
                      </MDBTypography>
  
                      <hr />
  
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1 fs-5 fw-semibold">Shopping cart</p>
                          <p className="mb-0 text-muted small">
                            You have 4 items in your cart
                          </p>
                        </div>
                        <div>
                          <p className="mb-0 text-muted small">
                            Sort by:{" "}
                            <a href="#!" className="text-dark fw-semibold text-decoration-none">
                              price <MDBIcon fas icon="angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
  
                      {/* PRODUCT CARD TEMPLATE */}
                      {[1, 2, 3, 4].map((_, i) => (
                        <MDBCard className="mb-3 border-0 shadow-sm rounded-4" key={i}>
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img${i + 1}.webp`}
                                    fluid
                                    className="rounded-3"
                                    style={{ width: "65px" }}
                                    alt="Shopping item"
                                  />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h6" className="fw-bold mb-1">
                                    {["Iphone 11 pro", "Samsung Note 10", "Canon EOS M50", "MacBook Pro"][i]}
                                  </MDBTypography>
                                  <p className="text-muted small mb-0">
                                    {["256GB, Navy Blue", "256GB, Navy Blue", "Onyx Black", "1TB, Graphite"][i]}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <MDBTypography tag="h6" className="mb-0 text-muted">
                                    {[2, 2, 1, 1][i]}
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h6" className="mb-0">
                                    {["$900", "$900", "$1199", "$1799"][i]}
                                  </MDBTypography>
                                </div>
                                <a href="#!" className="ms-3 text-muted hover-danger">
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
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0 fw-bold">
                              Card details
                            </MDBTypography>
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              fluid
                              className="rounded-circle shadow"
                              style={{ width: "45px" }}
                              alt="Avatar"
                            />
                          </div>
  
                          <p className="small text-muted">Card type</p>
                          <div className="mb-3">
                            {["mastercard", "visa", "amex", "paypal"].map((card, i) => (
                              <a
                                key={i}
                                href="#!"
                                className="text-dark me-3 fs-4 hover-opacity"
                              >
                                <MDBIcon fab icon={`cc-${card}`} />
                              </a>
                            ))}
                          </div>
  
                          <form className="mt-3">
                            <MDBInput
                              className="mb-3"
                              label="Cardholder's Name"
                              type="text"
                              size="lg"
                              placeholder="John Doe"
                            />
                            <MDBInput
                              className="mb-3"
                              label="Card Number"
                              type="text"
                              size="lg"
                              placeholder="1234 5678 9012 3457"
                            />
                            <MDBRow className="mb-3">
                              <MDBCol md="6">
                                <MDBInput
                                  label="Expiration"
                                  type="text"
                                  size="lg"
                                  placeholder="MM/YYYY"
                                />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput
                                  label="CVV"
                                  type="text"
                                  size="lg"
                                  placeholder="•••"
                                />
                              </MDBCol>
                            </MDBRow>
                          </form>
  
                          <hr />
  
                          <div className="d-flex justify-content-between mb-2">
                            <p className="mb-0">Subtotal</p>
                            <p className="mb-0">$4798.00</p>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <p className="mb-0">Shipping</p>
                            <p className="mb-0">$20.00</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <strong>Total (Incl. taxes)</strong>
                            <strong>$4818.00</strong>
                          </div>
  
                          <MDBBtn color="dark" block size="lg" className="rounded-pill">
                            <div className="d-flex justify-content-between">
                              <span>$4818.00</span>
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
  