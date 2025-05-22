import React from 'react';
import '../styles/components.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">Eyou Shop</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Shop</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
