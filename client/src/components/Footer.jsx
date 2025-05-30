import React from 'react';
import '../styles/componentCSS/Footer.css';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-modern">
      <div className="container text-center py-3">
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <h6>Customer Service</h6>
            <p>Contact · FAQ · Shipping · Returns</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6>About Us</h6>
            <p>Company · Careers · Sustainability</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Follow Us</h6>
            <div className="footer-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTiktok /></a>
            </div>
          </div>
        </div>
        <div className="text-muted small">© 2025 Eyou Store. All rights reserved.</div>
      </div>
    </footer>
  );
}
