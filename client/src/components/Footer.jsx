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
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>
        </div>
        <small className="text-muted">© 2025 Eyou Store. All rights reserved.</small>
      </div>
    </footer>
  );
}
