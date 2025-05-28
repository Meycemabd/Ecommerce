import React, { useState, useRef, useEffect } from 'react';
import { Home, ShoppingBag, Search, User, X } from 'lucide-react';
import "../styles/componentCSS/Header.css";

export default function Header({ setSearchQuery }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="main-header d-flex justify-content-between align-items-center px-4 py-3 shadow-sm bg-white fixed-top">
      <div className="logo-text">
       <a href="/">Eyou Store</a>
      </div>

      <nav className="flex-grow-1">
        <ul className={`nav-links list-unstyled d-flex align-items-center mb-0 ${searchOpen ? 'search-active justify-content-center' : 'justify-content-end'}`}>
          <li className="mx-3">
            <a href="/products" className="nav-icon text-decoration-none" aria-label="Home">
              <Home size={24} strokeWidth={1.5} />
            </a>
          </li>

          <li className="mx-3">
            <button
              onClick={() => setSearchOpen(prev => !prev)}
              className="nav-icon bg-transparent border-0"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? <X size={24} strokeWidth={1.5} /> : <Search size={24} strokeWidth={1.5} />}
            </button>
          </li>

          <li className="mx-3">
            <a href="" className="nav-icon text-decoration-none" aria-label="Products">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </a>
          </li>

          <li className="mx-3">
            <a href="/login" className="nav-icon text-decoration-none" aria-label="Login">
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
          className="search-input form-control"
          onChange={handleSearchChange}
          aria-label="Search products"
        />
      </div>
    </header>
  );
}
