import React, { useState, useRef, useEffect } from 'react';
import { Home, ShoppingBag, Search, User, X } from 'lucide-react';
import '../styles/components.css';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header className="main-header">
      <div className="logo-text">
        <span className="eyou">Eyou Store</span>
      </div>

      <nav>
        <ul className={`nav-links ${searchOpen ? 'search-active' : ''}`}>
          <li>
            <a href="/" className="nav-icon" aria-label="Home">
              <Home size={24} strokeWidth={1.5} />
            </a>
          </li>

          <li>
            <button
              onClick={() => setSearchOpen((o) => !o)}
              className="nav-icon btn-icon"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? <X size={24} strokeWidth={1.5} /> : <Search size={24} strokeWidth={1.5} />}
            </button>
          </li>

          <li>
            <a href="/products" className="nav-icon" aria-label="Products">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </a>
          </li>

          <li>
            <a href="/login" className="nav-icon" aria-label="Login">
              <User size={24} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
      </nav>

      <div className={`search-wrapper ${searchOpen ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Search products..."
          ref={inputRef}
          className="search-input"
          aria-label="Search products"
        />
      </div>
    </header>
  );
}
