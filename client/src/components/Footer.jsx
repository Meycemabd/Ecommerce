import React from 'react';
import '../styles/componentCSS/Footer.css';

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container">
        <div className="row justify-content-center text-center text-md-start">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase fw-semibold">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2 footer-link">Contact</li>
              <li className="mb-2 footer-link">FAQ</li>
              <li className="mb-2 footer-link">Return Policy</li>
              <li className="mb-2 footer-link">Shipping</li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase fw-semibold">About</h5>
            <ul className="list-unstyled">
              <li className="mb-2 footer-link">Our Story</li>
              <li className="mb-2 footer-link">Careers</li>
              <li className="mb-2 footer-link">Sustainability</li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase fw-semibold">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2 footer-link">Terms & Conditions</li>
              <li className="mb-2 footer-link">Privacy Policy</li>
              <li className="mb-2 footer-link">Cookies</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-3 border-top text-muted small">
          © 2025 Eyou Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
