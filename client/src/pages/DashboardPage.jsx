// src/pages/DashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from 'mdb-react-ui-kit';
import '../styles/pagesCSS/DashboardPage.css';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-banner">
        <h1>Welcome back.</h1>
        <p>Your style, your rules. Explore what's waiting in your wishlist or cart.</p>
        <div className="dashboard-buttons">
          <MDBBtn color="dark" className="dashboard-btn" onClick={() => navigate('/favorites')}>
            Go to Wishlist
          </MDBBtn>
          <MDBBtn outline color="dark" className="dashboard-btn" onClick={() => navigate('/cart')}>
            View Cart
          </MDBBtn>
        </div>
      </div>

      <MDBContainer className="dashboard-content py-5">
        {/* Address Info & Last Order in einer Reihe */}
        <MDBRow className="gy-4 mb-4">
          {/* Last Order */}
          <MDBCol md="6">
            <MDBCard className="info-card h-100">
              <MDBCardBody>
                <h5 className="mb-3">🧾 Your Last Order</h5>
                <p><strong>Order ID:</strong> #123456</p>
                <p><strong>Date:</strong> June 1, 2025</p>
                <p><strong>Items:</strong> 2 products</p>
                <p><strong>Total:</strong> €89.99</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
           {/* Address Info */}
           <MDBCol md="6">
            <MDBCard className="info-card h-100">
              <MDBCardBody>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5>🏠 Address Info</h5>
                  <MDBBtn size="sm" outline color="dark">Edit</MDBBtn>
                </div>
                <MDBRow>
                  <MDBCol xs="6">
                    <p><strong>Name:</strong><br />John Doe</p>
                  </MDBCol>
                  <MDBCol xs="6">
                    <p><strong>Address:</strong><br />Sample Street 123<br />12345 Berlin</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* Payment + Contact */}
        <MDBRow className="gy-4">
          {/* Payment Method */}
          <MDBCol md="6">
            <MDBCard className="info-card h-100">
              <MDBCardBody>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5>💳 Payment Method</h5>
                  <MDBBtn size="sm" outline color="dark">Edit</MDBBtn>
                </div>
                <p>Visa **** 1234<br />Exp: 06/26</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Contact Info */}
          <MDBCol md="6">
            <MDBCard className="info-card h-100">
              <MDBCardBody>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5>📞 Contact Info</h5>
                  <MDBBtn size="sm" outline color="dark">Edit</MDBBtn>
                </div>
                <p>Email: john@example.com<br />Phone: +49 123 456789</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DashboardPage;
